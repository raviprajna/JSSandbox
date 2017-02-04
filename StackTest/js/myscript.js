var app = angular.module('stckTest',[]);

app.controller('stackController',function($scope, stackService )
              {
    $scope.printStack = 'Stack Trace';
    
    $scope.add = function(){
        stackService.pushToStack($scope.pushvalue);
    };
    $scope.remove = function(){
          stackService.popFromStack();
    };
    
});

app.service('stackService',function($http){
    this.pushToStack = function(pushvalue){
       /* $http({
            method : 'POST',
            url : 'StackServelet',
            params : {
                operation : 'PUSH',
                oprvalue : pushvalue
            }
        }).success(function(data){
            alert(data);
        }); */
        alert("PUSH");
    }
    
        this.popFromStack = function(){
       /*  $http({
            method : 'POST',
            url : 'StackServelet',
            params : {
                operation : 'POP'
            }
        }).success(function(data){
            alert(data);
        }); */
            alert("POP");
    }
    
});