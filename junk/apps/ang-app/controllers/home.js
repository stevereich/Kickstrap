(function() {
  define(['./module'], function(controllers) {
    return controllers.controller('HomeCtrl', [
      '$scope', '$location', function($scope, $location) {
        var isSelected;
        $scope.cookies = {
          newFSCreated: false,
          newFSEdited: false
        };
        $scope.factorSets = [
          {
            name: 'New Factor Set',
            factors: []
          }, {
            name: 'All',
            factors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
          }, {
            name: 'Recommended',
            factors: [0, 1, 2]
          }, {
            name: 'Factor Set 1',
            factors: [3, 1]
          }
        ];
        $scope.factors = [
          {
            name: 'DEF Factors',
            checked: true
          }, {
            name: 'Something Else',
            checked: true
          }, {
            name: 'ABC Factor',
            checked: true
          }, {
            name: 'Johnson-Leary Factor',
            checked: false
          }, {
            name: 'Factor 123',
            checked: false
          }, {
            name: 'JRDN Factor',
            checked: false
          }, {
            name: '10-60.2',
            checked: false
          }, {
            name: 'Globocorp Mutual Factor',
            checked: false
          }, {
            name: 'Winthrop-Castell coeff.',
            checked: false
          }, {
            name: 'Standard 53a Factor',
            checked: false
          }, {
            name: 'Blackwell Assets Algorithmic',
            checked: false
          }
        ];
        $scope.factorSet = $scope.factorSets[2];
        $scope.factorSet2 = $scope.factorSets[3];
        $scope.expanded = false;
        $scope.toggleExpanded = function() {
          var factor, _i, _len, _ref;
          $scope.expanded = !$scope.expanded;
          if ($scope.expanded && $scope.factorSet === $scope.factorSets[2]) {
            $scope.factorSet = $scope.factorSets[0];
            _ref = $scope.factorSets[2].factors;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              factor = _ref[_i];
              if ($scope.factors[factor].checked) {
                $scope.factorSet.factors.push(_i);
              }
            }
            return $scope.cookies.newFSCreated = true;
          }
        };
        $scope.toggleChecked = function(factor) {
          return factor.checked = !factor.checked;
        };
        $scope.toggleSelected = function(fIndex) {
          if ($scope.expanded) {
            return $scope.factors[fIndex].selected = !$scope.factors[fIndex].selected;
          }
        };
        isSelected = function(factor) {
          return factor.selected;
        };
        $scope.moveLeft = function() {
          var factor, _i, _len, _ref;
          _ref = $scope.factors;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            factor = _ref[_i];
            if (factor.selected && $scope.inFactorSet2(_i) && !$scope.inFactorSet(_i)) {
              $scope.factorSet.factors.push(_i);
              factor.selected = false;
            }
          }
          if ($scope.cookies.newFSCreated) {
            return $scope.cookies.newFSEdited = true;
          }
        };
        $scope.moveRight = function() {
          var factor, _i, _len, _ref, _results;
          _ref = $scope.factors;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            factor = _ref[_i];
            _results.push(factor.selected && $scope.inFactorSet(_i) ? ($scope.factorSet.factors.splice($scope.factorSet.factors.indexOf(_i), 1), factor.selected = false) : void 0);
          }
          return _results;
        };
        $scope.inFactorSet = function(factor) {
          return $scope.factorSet.factors.indexOf(factor) > -1;
        };
        return $scope.inFactorSet2 = function(factor) {
          return $scope.factorSet2.factors.indexOf(factor) > -1;
        };
      }
    ]);
  });

}).call(this);
