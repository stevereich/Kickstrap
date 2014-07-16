(function() {
  define(['./module'], function(controllers) {
    return controllers.controller('DemoCtrl', [
      '$scope', 'angularFire', function($scope, angularFire) {
        $scope.fName = ' ';
        $scope.lName = ' ';
        return $scope.fullName = function() {
          return $scope.fName + ' ' + $scope.lName;
        };
      }
    ]);
  });

}).call(this);
