
function MyCtrl($scope, $groupShare){
    $groupShare.controller($scope, 'MyCtrl', {message:'', scores:[], everyone: {}});                 
    $scope.gshare = $groupShare;
    $scope.myid = (''+Math.random()).slice(2);
    $scope.reset = function() { // 
        $groupShare.clear(); 
        location.reload();
    }
}  

angular.module('MyModule', ['$groupShare'])
    .config(["$groupShareProvider", function ($groupShareProvider) {
        $groupShareProvider.config({store:sessionStorage, appId:'try', proof:'try'}); // {} or sessionStorage or localStorage or any other keyval store
    }])
    .controller('MyCtrl',  MyCtrl)
    .factory( "$exceptionHandler",function (){ 
        return function(exception, cause){ 
            console.log(exception, cause);
            if (exception.id == 'plural') alert('Two clients using the same clientStore...');
        } 
    }); 

