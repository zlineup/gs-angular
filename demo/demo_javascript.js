
var app = new $GroupShareApp();
app.config({store:sessionStorage, appId:'try', proof:'try'}); // {} or sessionStorage or localStorage or any other keyval store
var gshare = new app.$get()
var $scope = {
   '$digest': function (){
      var ol, li, label;
      if (gshare.registered) {
         document.getElementById("register").style.display = "none";
         document.getElementById("myApp").style.display = "block";
      } else {
         document.getElementById("register").style.display = "block";
         document.getElementById("myApp").style.display = "none";
      } 
      document.getElementById("gshare_name1").value = gshare.name;
      document.getElementById("gshare_code2").value = gshare.code;
      document.getElementById("gshare_name2").value = gshare.name;
      document.getElementById("gshare_code3").textContent = gshare.code;
      document.getElementById("gshare_name3").textContent = gshare.name;
      document.getElementById("message").value = $scope.message;
      document.getElementById("message_display").textContent = $scope.message;
      ol = document.getElementById("scores");
      while (ol.firstChild) ol.removeChild(ol.firstChild);
      for (var i=0;i<$scope.scores.length;i++) {
         li = document.createElement("li");
         label = document.createElement("label");
         label.style.color = $scope.scores[i].color;
         label.textContent = $scope.scores[i].name;
         li.appendChild(label);
         ol.appendChild(li);
      }
      var ol = document.getElementById("names");
      while (ol.firstChild) ol.removeChild(ol.firstChild);
      for (var who in $scope.everyone) {
         li = document.createElement("li");
         label = document.createElement("label");
         label.textContent = $scope.everyone[who];
         li.appendChild(label);
         ol.appendChild(li);
      }
   }
//   , '$apply': function (expr){
//      try {
//         if (expr) return $eval(expr);
//      } catch (e) {
//         $exceptionHandler(e);
//      } finally {
//         $scope['$digest']();
//      }
//   }
   , '$watch': function (v, share_watch, flag){
       share_watch(); 
   }
   , gshare: gshare
   , myid: (''+Math.random()).slice(2)
   , reset: function() {  
        $groupShare.clear(); 
        location.reload();
    }
}
gshare.controller($scope, 'MyCtrl', {message:'', scores:[], everyone: {}});                 
//$scope['$digest']();

function add_score() {
   var name  = document.getElementById("name").value;
   var color = document.getElementById("color").value;
   $scope.scores.push({name: name, color:color})
   $scope['$gs_update']("scores"); 
}
function clear_scores() {
   $scope.scores.length = 0;
   $scope['$gs_update']("scores"); 
}
function add_name() {
   $scope.everyone[$scope.myid] = document.getElementById("myname").value;    
   $scope['$gs_update']("everyone"); 
}
document.getElementById("message").addEventListener("keyup", function() {
   $scope.message = document.getElementById("message").value;
   $scope['$gs_update']("message");
});
document.getElementById("gshare_name1").addEventListener("change", function() {   
  gshare['name'] = document.getElementById("gshare_name1").value;
  document.getElementById("gshare_name2").value = gshare['name'];
});
document.getElementById("gshare_name2").addEventListener("change", function() {   
  gshare['name'] = document.getElementById("gshare_name2").value;
  document.getElementById("gshare_name1").value = gshare['name'];
});
document.getElementById("gshare_code2").addEventListener("change", function() {   
  gshare['code'] = document.getElementById("gshare_code2").value;
});

