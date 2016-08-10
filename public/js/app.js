'use strict'
var app = angular.module('myBlog', []);
app.controller("appCtrl", ['$scope', '$location', "$http", "$window", function($scope, $location, $http, $window) {

    $scope.toggleReminder = false;

    $scope.isActive = function(viewlocation) {
        var active = (viewlocation === $location.path());
        return active;
    }


    //Ajax get request
    $http.get('/api').success(function(data) {
        $scope.blog = data;
    });

    $scope.yourBlog = {
        title: "",
        body: ""
    }


    //Ajax post request
    $scope.postBlog = function() {
            $scope.toggleReminder = false;
            if (($scope.yourBlog.title && $scope.yourBlog.title.trim().length) && ($scope.yourBlog.body && $scope.yourBlog.body.trim().length)) {
                $http.post('/api', $scope.yourBlog).success(function(data) {
                    console.log(data);
                    if (data) {
                        $window.location = '#/uploadsuccesful.html'
                    }
                });
            } else {
                $scope.toggleReminder = true;
                console.log("empty string")
            }

        }
        //AJAX Delete request
    $scope.deleteBlog = function(id) {
        $http.delete('api/' + id).then(function() {
            $window.location = "#/reload.html";
        });
    }



}]);


//Implements frontend routing
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/addblog.html',
            controller: "appCtrl"

        })
        .when('/blog.html', {
            templateUrl: 'templates/blogs.html',
            controller: "appCtrl"
        }).when('/uploadsuccesful.html', {
            templateUrl: 'templates/uploadsuccesful.html',
            controller: "appCtrl"
        })
        .when('/reload.html', {
            redirectTo: 'blog.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
