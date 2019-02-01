angular.module('app.controllers', [])
  
.controller('stayConnectedCtrl', function($scope, $firebaseAuth, authDatafactory) {
    
    $scope.googleLogin = authDatafactory.loginSC;
    $scope.authData =  authDatafactory.getAuthDataRef();
})
   
.controller('stayConnected2Ctrl', function($scope,$location, messagesFactory, authDatafactory) {

$scope.messages = messagesFactory;
$scope.data = {};
$scope.authData =  authDatafactory.getAuthDataRef();
    // alert($scope.authData.uid);
$scope.shouldShowDelete = true; // Toggle this based on user authentication 
    
    
     $scope.addMessage = function() {
     
        $scope.messages.$add({
        "message": $scope.data.message,
        "uid": $scope.authData.uid,
        "googleId" : $scope.authData.google.id,
        "googleName" : $scope.authData.google.displayName,
        "googleImgURL": $scope.authData.google.profileImageURL});
          };
    $scope.goToDetails = function()
    {
       // alert(" clicked ");
        $location.path('connectionDetails'); 
    };
    

    

})
   
.controller('connectionCtrl', function($scope) {

})
 