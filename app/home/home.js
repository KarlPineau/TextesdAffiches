app.controller("HomeCtrl", function ($scope, $http) {
    $scope.loading = true;
    $http.get("http://zone47.com/tda/api/").then(function (response) {
        console.log(response.data);
        $scope.movies = response.data;
        $scope.loading = false;
    });
});