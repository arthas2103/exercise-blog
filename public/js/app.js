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
        console.log(data)
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
        .otherwise({
            redirectTo: '/'
        });
}]);


//Data service. Implements GET and POST api requests to the backend

//     this.blogs = [{
//         name: "My blog",
//         blog: "Bacon ipsum dolor amet jerky ham hock capicola turkey cupim bresaola t-bone short ribs biltong rump salami pork belly pork chop. Picanha kevin pig cow sausage shank fatback meatloaf brisket flank short loin boudin andouille. Ground round porchetta andouille kevin. T-bone turducken meatball rump. Kielbasa frankfurter jowl swine, doner ground round ball tip sausage tenderloin bresaola pork capicola chicken meatloaf.\
// Short ribs jowl turducken boudin ground round pancetta, drumstick bacon filet mignon spare ribs alcatra turkey. Sausage meatball hamburger bacon boudin sirloin turkey. Bresaola hamburger t-bone pork pancetta tenderloin cupim capicola pork chop sausage bacon pork belly picanha. Corned beef flank beef, turducken short loin jerky fatback chicken picanha shankle brisket kielbasa sirloin frankfurter.\
// Ground round bresaola boudin fatback drumstick ham hamburger beef ribs. Brisket meatball pork belly jowl chuck strip steak turkey pork loin. Ball tip andouille cupim hamburger, ground round shank drumstick pork leberkas bresaola ribeye spare ribs bacon chuck. Pancetta pork belly cupim meatball jowl, venison frankfurter brisket fatback pork loin turkey corned beef.\
// Landjaeger cupim shankle, prosciutto andouille meatball frankfurter biltong pork loin pastrami. Chuck pig sirloin andouille biltong pancetta. Biltong bresaola alcatra ham pork chop tenderloin t-bone beef bacon filet mignon. Kevin andouille ground round drumstick, filet mignon porchetta pork chop salami swine chuck landjaeger leberkas. Landjaeger flank filet mignon pork, ground round pastrami ribeye frankfurter beef ribs chicken pork loin ham capicola. Bacon filet mignon short ribs pork loin tail capicola meatball.\
// Shank salami pig, capicola alcatra bacon rump chicken pastrami ham boudin ball tip meatloaf cow. Salami spare ribs rump meatball shoulder alcatra porchetta, leberkas sausage bacon jerky swine. Venison pork belly ground round hamburger drumstick t-bone. Andouille hamburger bresaola doner beef drumstick pork loin salami shoulder t-bone brisket tail cow jerky. Prosciutto turducken shank alcatra. Strip steak spare ribs biltong pork loin.\
// Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!"
//     }];
