angular.module('app').controller('mainCtrl', function ($scope, $http, $rootScope, $interval, $location) {
  $scope.basicDataExample = JSON.stringify({
    "username": "username",
    "name": "character name",
    "class": "Blade Master",
    "level": 50,
    "hongmoonLevel": 2,
    "server": "Mushin",
    "faction": "Cerulean Order Recruit",
    "guild": ""
  });
});
