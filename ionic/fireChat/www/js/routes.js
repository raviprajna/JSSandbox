angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('stayConnected', {
      url: '/login',
      templateUrl: 'templates/stayConnected.html',
      controller: 'stayConnectedCtrl'
    })
        
      
    
      
        
    .state('stayConnected2', {
      url: '/chat',
      templateUrl: 'templates/stayConnected2.html',
      controller: 'stayConnected2Ctrl'
    })
        
      
    
      
        
    .state('connection', {
      url: '/connectionDetails',
      templateUrl: 'templates/connection.html',
      controller: 'connectionCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});