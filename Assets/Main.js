/// <reference path="../scripts/angular.js" />

var APIURL = 'https://localhost:44340/';

var MainApp = angular.module('MainApp', [])
    .controller('MainController', function ($scope, $http, $endpoint) {
        $http.get(APIURL + $endpoint)
            .then(function (response) {
                console.log(response.data.Data);
                $scope.Response = response.data.Data;
            },
                function (error) {
                    console.log(error);
                });
    });