# gs-angular - Group-Share for Angular
Angular support for Group-Share extends Angular to enable clients to seenlesly share data 

See <a href="zlineup.com">zlineup.com</a> for details

Here is a link to a <a href="http://zlineup.com/ang/ang.html" target="_blank">demo</a>:
<ol>
 	<li>Open this <a href="http://zlineup.com/ang/ang.html" target="_blank">demo</a> link twice:
<ul>
 	<li>E.g. from two different devices (PC, Mobile)</li>
</ul>
</li>
 	<li>Create a group in one of them and join the group with the other</li>
 	<li>Note that you share the data between the two devices - this data persists as long as you have clients belonging to this group</li>
</ol>

See how simple the anugular code enabling this sharing is:
<pre class="EnlighterJSRAW" data-enlighter-language="js">function MyCtrl($scope, $groupShare){
    $groupShare.controller($scope, 'MyCtrl', {message:'', scores:[]});                 
}  
angular.module('MyModule', ['$groupShare']).controller('MyCtrl',  MyCtrl)
</pre>
This simple code does everything for us from creating a client to seamlesly synchronizing our scope data between our client and any other client in our group.

Lets walk through this simple code:
<ol>
 	<li>When we created our 'MyModule' module, we indicated that it depnds on <strong>$groupShare</strong> (which is the Group-Share extention to angular)</li>
 	<li>When starting up our 'MyCtrl' controller we used <strong>$groupShare.controller()</strong> to register our controller to <strong>$groupShare</strong> and indicated that we would like to share two data items: 'message' (which needs to be initialized to an empty string) and 'scores (which needs to be initizalized to an empty list).</li>
 	<li>mmm... and this is basically it.</li>
</ol>
To get our client connect to a group, we need some controls:
<ul>
 	<li><strong>$groupShare.create()</strong> creates a new group</li>
 	<li><strong>$groupShare.getGroupCode()</strong> allocates a temporary code to allow other group memebers to join our group</li>
 	<li><strong>$groupShare.join()</strong> joins an existing group</li>
 	<li><strong>$groupShare.clear()</strong> disconnects from a group</li>
 	<li><strong>$groupShare.name</strong> is the group's name</li>
 	<li><strong>$groupShare.code</strong> is the group's temporary code</li>
 	<li><strong>$groupShare.registered</strong> is true if our client belongs to a group and false otherwise  - we can use it to toggle our application between registration phase and data sharing phase :)</li>
</ul>
This all can very conviniently be used directly by our html as shown in our example code - or be extended by JS.

Each group client stores the group's shared data and state. We can control where this data is stored by configuring the <strong>$groupShareProvider</strong> by calling the  <strong>$groupShareProvider.setClientStore()</strong> during the module initialization (See example below). By setting the store we control the persistency of our client and its data.
<ul>
 	<li>Set the store to be an empty JS object (<strong>{})</strong> if you would like a new client whenever the page refreshes</li>
 	<li>Set the store to be <strong>sessionStorage</strong> (which is the defualt) if you would like a new client for each browser window/tab</li>
 	<li>Set the store to be <strong>localStorage</strong> if you would like to have a single persistent client</li>
 	<li>Set the store to be any <strong>KeyVal</strong> under your control if you need to decide which client to use whenever you invocate the application. This can enable you to use multiple clients belonging to multiple groups and move between these clients.</li>
</ul>
Note that Group-Share requires that you reload the application after you leave a group and before you create/join a different group or move between clients.

A more complete code may therefore look like:
<pre class="EnlighterJSRAW" data-enlighter-language="js">function MyCtrl($scope, $groupShare){
    $groupShare.controller($scope, 'MyCtrl', {message:'', scores:[]});   
    $scope.gshare = $groupShare;
    $scope.reset = function() { // 
        $groupShare.clear(); 
        location.reload();
    }
}  

angular.module('MyModule', ['$groupShare'])
    .config(["$groupShareProvider", function ($groupShareProvider) {
        $groupShareProvider.config({store:sessionStorage, appId: 'try', proof: 'try'}); // store may be: {} or sessionStorage or localStorage or any other keyval store

    }])
    .controller('MyCtrl',  MyCtrl)
    .factory( "$exceptionHandler",function (){ 
        return function(exception, cause){ 
            console.log(exception, cause);
            if (exception.id == 'plural') alert('Two clients using the same clientStore...');
        } 
    });</pre>
Note that we kept a reference to <strong>$groupShare</strong> in our scope.gshare to be able to communicate with it directly from our example html.
