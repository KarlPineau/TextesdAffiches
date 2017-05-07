var app = angular.module("tdaApp", ["ngRoute", "angucomplete"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "home/home.html",
            controller : "HomeCtrl"
        })
        .when("/search/:typeSearch/:query", {
            templateUrl : "search/search.html",
            controller : "SearchCtrl"
        })
        .when("/movie/:qwd/:search?/:typeSearch?", {
            templateUrl : "viewMovie/viewMovie.html",
            controller : "ViewMovieCtrl"
        })
        .when("/book/:qwd/:search?/:typeSearch?", {
            templateUrl : "viewBook/viewBook.html",
            controller : "ViewBookCtrl"
        })
        .when("/categories", {
            templateUrl : "thesaurus/categories/categories.html",
            controller : "CategoriesCtrl"
        })
        .when("/category/:typeCategory/:label", {
            templateUrl : "thesaurus/category/category.html",
            controller : "CategoryCtrl"
        })
        .when("/items/:typeCategory/:category/:value", {
            templateUrl : "thesaurus/items/items.html",
            controller : "ItemsCtrl"
        })
        .when("/about", {
            templateUrl : "about/about.html",
            controller : "AboutCtrl"
        })
        .otherwise({
            templateUrl : "home/home.html",
            controller : "HomeCtrl"
        });
});