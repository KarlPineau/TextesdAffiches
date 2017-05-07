app.controller("ViewMovieCtrl", function ($routeParams, $scope, $http) {
    $scope.loading = true;
    $http.get("http://zone47.com/tda/api/?q="+$routeParams.qwd).then(function (response) {
        console.log(response.data);
        if( response.data.length > 0) {
            $scope.movie = response.data[0];
        } else {
            $scope.movie = null;
        }
        $scope.search = $routeParams.search;
        $scope.typeSearch = $routeParams.typeSearch;
        $scope.loading = false;
    });
});