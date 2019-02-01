angular.module('app.services', [])

.factory('messagesFactory', function($firebaseArray) {

  var messagesRef = new Firebase("https://raviprajnalabs.firebaseio.com/messages");
  return $firebaseArray(messagesRef);

})

.factory('FirebaseRef', function($firebaseArray) {

  var messagesRef = new Firebase("https://raviprajnalabs.firebaseio.com/messages");
  return messagesRef;

})

.factory('authDatafactory', function($firebaseAuth,$location, FirebaseRef) {

  var authDataRef = "";
    
function loginSC() {
    var auth = $firebaseAuth(FirebaseRef);
    // $authWithOAuthRedirect is not working 
  auth.$authWithOAuthPopup("google").then(function(authData) {
       authDataRef = authData;
      $location.path('chat')
     }).catch(function(error) {
        Auth.$authWithOAuthPopup("google").then(function(authData) {
          // User successfully logged in. We can log to the console
          // since we’re using a popup here
         authDataRef = authData;
            $location.path('chat')
        });
      
  });
   
    }
    
    function getAuthDataRef()
    {
       return authDataRef; 
    }
    
    return {
    loginSC: loginSC,
    getAuthDataRef: getAuthDataRef
  };

})

.service('BlankService', [function(){

}]);

