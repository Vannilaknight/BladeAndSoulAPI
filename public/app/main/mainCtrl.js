angular.module('app').controller('mainCtrl', function ($scope, $http, $rootScope, $interval, $location) {
  $scope.searchResults = {
    "username": "username",
    "name": "character name",
    "class": "Blade Master",
    "level": 50,
    "hongmoonLevel": 2,
    "server": "Mushin",
    "faction": "Cerulean Order Recruit",
    "guild": ""
  };

  $scope.search = function () {
    $http.get("/api/character/" + $scope.characterName).then(function (results) {
      $scope.searchResults = results.data;
    });
  }
});
