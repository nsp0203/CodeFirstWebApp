/// <reference path="../../scripts/angular.js" />

var app = angular.module('Home', [])
    .controller('HomeCtrl', function ($scope, $http) {
        $http.get("https://localhost:44340/User/GetUsers")
            .then(function (response) {
                $scope.Users = response.data.Data;
                console.log(response.data.Data);
            },
            function (error) {
                console.log(error);
            });
    });