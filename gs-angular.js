
function GroupShare($timeout, usercfg) {
    var me = this;
    var bend = bendFactory.new(usercfg.appId, usercfg.proof, usercfg.appCtrlUrl);

    function compareByVal(v1, v2) {
        if (v1 == v2) return true;
        if ('object' !== typeof v2) return false;
        if ('object' !== typeof v1) return false;
        if (Array.isArray(v1)) {
            if (!Array.isArray(v2)) return false;
            if (v1.length != v2.length) return false;
            for (var i=0; i<v1.length; i++) { 
                if (!compareByVal(v1[i], v2[i])) return false;
            }
            return true;
        } 
        if (Array.isArray(v2)) return false;
        if (Object.keys(v1).length != Object.keys(v2).length) return false;
        for (var k in v2) {
            if (!compareByVal(v1[k], v2[k])) return false;
        }
        return true;
    }

    function copyByVal(nv, v) {
        if (typeof nv === 'undefined') return v;
        if (typeof nv !== 'object') return nv;
        if (Array.isArray(nv)) {
            var arr = [];
            if (Array.isArray(v)) {
                arr = v;
                arr.length = 0;
            }
            for (var i=0; i<nv.length; i++) { 
                arr.push(copyByVal(nv[i])) // is this inline with 
            }
            return arr;
        }
        if (typeof v !== 'object' || Array.isArray(v)) v = {}
        var vKeys = Object.keys(v)
        for (var k in nv) {
            //if ((k[0] == '$') || (k[0] == '@') || (k == '_oid')) continue;
            if (k[0] == '$') continue;
            v[k] = copyByVal(nv[k], v[k]);    
            var index = vKeys.indexOf(k);
            if (index >=0) vKeys.splice(index,1);
        }
        return v; 
    }

    this.registered = false;
    this.name = '';
    this.code = '';
    this.controllers = {};
    this.controller = function($scope, controllerName, values) {
        if (!controllerName || (typeof controllerName != 'string') || !$scope || (typeof values != 'object')) throw new groupShareException('wrong parameters');
        if (controllerName in me.controllers) throw  new groupShareException('controller already initialized');

        me.controllers[controllerName]  = {scope: $scope, values:values}
        for (var v in values) {
            // inisialize scope using values
            if (!$scope.hasOwnProperty(v)) $scope[v] = copyByVal(values[v]);
        }
        init();
        if (me.registered) {
            init_controller(controllerName);
        }                    
    }

    this.getGroupCode = function() {    
        function _done(resp) {
            if (resp) me.code = resp.gCode; 
            for (var controllerName in me.controllers) {
                var $scope = me.controllers[controllerName].scope;
                $scope.$apply();
            }
        }
        if (!bend.ready) return;
        bend.getGroupCode(_done);   
    }
    this.create = function() {
        init({gName:me.name, reset:true});
    }
    this.join = function() {
        init({gName:me.name, gCode:me.code, reset:true});
    }
    this.clear = function() {
        bend.clear(); 
    }
    function createSharedObj($scope, v, controllerName) {
        var sobj = bend.createNamedSharedObj({v:v}, v, controllerName); 
        var values = me.controllers[controllerName].values;
        var during_init = true;
        function share_watch() {
            if (!$scope || $scope.$remote || !$scope.hasOwnProperty(v) || during_init) return;
            if (values.hasOwnProperty(v)) {
                if (values.hasOwnProperty(v) && compareByVal($scope[v], values[v])) return;
                delete values[v];
            }
            sobj.data = copyByVal($scope[v], sobj.data);
            bend.updateSharedObj(sobj);
        }
        $scope.$watch.call($scope, v, share_watch, true);
        during_init = false;
    }
    function init_controller(controllerName) {
        var $scope = me.controllers[controllerName].scope
        var values = me.controllers[controllerName].values;

        function share_cb($scope, sobj, remote, del) {
            if (!$scope) return;        
            if (!sobj.hasOwnProperty('v') || (typeof sobj.data === 'undefined')) return;
            $scope[sobj.v] = copyByVal(sobj.data, $scope[sobj.v]);
            if (remote) {
                $scope.$remote = true
                $scope.$digest(); // or $digest()
                $scope.$remote = false
            }
        }
        bend.addCollection(controllerName, bend.CTYPE_NAMED, share_cb, $scope);
        for (var v in values) {
            createSharedObj($scope, v, controllerName); 
        }
    }
    function init(cfg) {
        function done() {
            me.code = '';
            for (var controllerName in me.controllers) {
                init_controller(controllerName);
            }
            me.registered = true;
                
            $timeout(function() {
                me.name = bend.getGroupName();
            }, 0);        
        }
        var _cfg = {}
        for (var k in usercfg) _cfg[k] = usercfg[k];
        for (var k in cfg) _cfg[k] = cfg[k];
        return bend.init(_cfg, done); 
    }        
}
var app = angular.module('$groupShare', []);
app.provider('$groupShare', function() {
    var usercfg = {'store': sessionStorage, 'appId': 'try', 'proof': 'try', 'appCtrlUrl':"http://srv.zlineup.com:5105"};
    this.config = function (_usercfg) {
        usercfg = _usercfg;
    };
    this.$get = ['$timeout', function($timeout) {return new GroupShare($timeout, usercfg)}]
})

