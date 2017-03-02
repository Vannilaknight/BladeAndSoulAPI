angular.module('app').controller('mainCtrl', function ($scope, $http, $rootScope, $interval, $location) {
  $scope.searchResults = {};

  $scope.search = function () {
    $http.get("/api/character/" + $scope.characterName).then(function (results) {
      $scope.searchResults = results.data;
    });
  }
});
