app.controller("ViewBookCtrl", function ($routeParams, $scope, $http) {
    $scope.loading = true;
    $http.get("http://zone47.com/tda/api/?q=Q"+$routeParams.qwd+"&type=books").then(function (response) {
        console.log(response.data);
        if( response.data.length > 0) {
            $scope.book = response.data[0];
        } else {
            $scope.book = null;
        }
        $scope.search = $routeParams.search;
        $scope.typeSearch = $routeParams.typeSearch;
        $scope.loading = false;
    });
});