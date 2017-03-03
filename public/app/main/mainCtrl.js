angular.module('app').controller('mainCtrl', function ($scope, $http, $rootScope, $interval, $location) {
  $scope.searchResults = {};
  $scope.region = "NA";

  $scope.search = function () {
    $http.get("/api/character/" + $scope.region.toLowerCase() + "/" + $scope.characterName).then(function (results) {
      $scope.searchResults = results.data;
    });
  }
});
