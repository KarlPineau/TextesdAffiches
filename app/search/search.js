app.controller("SearchCtrl", function ($routeParams, $scope, $http) {
    $scope.loading = true;
    $http.get("http://zone47.com/tda/api/?s="+$routeParams.query+"&type="+$routeParams.typeSearch).then(function (response) {
        console.log(response.data);
        $scope.items = response.data;
        $scope.search = $routeParams.query;
        $scope.typeSearch = $routeParams.typeSearch;
        $scope.loading = false;

        switch($routeParams.typeSearch) {
            case "books":
                $scope.typeSearchLabel = "ouvrages";
                break;
            case "movies":
                $scope.typeSearchLabel = "films";
                break;

        }
    });
});