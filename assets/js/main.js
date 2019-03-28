var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/", { templateUrl: "./views/pages/home.html", controller: "PageCtrl" })
        .when("/work", { templateUrl: "./views/pages/work.html", controller: "PageCtrl" })
        .when("/experiences", { templateUrl: "./views/pages/experiences.html", controller: "PageCtrl" })
        .when("/blog", { templateUrl: "./views/pages/blog.html", controller: "PageCtrl" })
        .when("/contact", { templateUrl: "./views/pages/contact.html", controller: "PageCtrl" })
        .otherwise("/404", { templateUrl: "./views/pages/404.html", controller: "PageCtrl" });
}]);

app.controller('PageCtrl', function ($scope) {
    $scope.pageClass = 'page-effect';
});

app.controller("dataImagesWork", function ($scope) {
    $scope.images_work = [
        { num: 1, category: 'marketing', src: "1.jpg", description: 'Oscar is a decent man. He used to clean porches with pleasure. ', url_details: "details.html" },
        { num: 2, category: 'branding', src: "2.jpg", description: 'Oscar is a decent man. He used to clean porches with pleasure. ', url_details: "details.html" },
        { num: 3, category: 'design', src: "3.jpg", description: 'Oscar is a decent man. He used to clean porches with pleasure. ', url_details: "details.html" },
        { num: 4, category: 'photo', src: "4.jpg", description: 'Oscar is a decent man. He used to clean porches with pleasure. ', url_details: "details.html" },
        { num: 5, category: 'marketing', src: "5.jpg", description: 'Oscar is a decent man. He used to clean porches with pleasure. ', url_details: "details.html" },
        { num: 6, category: 'design', src: "6.jpg", description: 'Oscar is a decent man. He used to clean porches with pleasure. ', url_details: "details.html" },
        { num: 7, category: 'photo', src: "7.jpg", description: 'Oscar is a decent man. He used to clean porches with pleasure. ', url_details: "details.html" },
        { num: 8, category: 'marketing', src: "8.jpg", description: 'Oscar is a decent man. He used to clean porches with pleasure. ', url_details: "details.html" },
        { num: 9, category: 'design', src: "9.jpg", description: 'Oscar is a decent man. He used to clean porches with pleasure. ', url_details: "details.html" }];
});