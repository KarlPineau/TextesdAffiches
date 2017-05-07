app.controller("SearchCtrl", function ($http, $timeout, $q, $log) {
    var self = this;

    self.simulateQuery = false;
    self.isDisabled    = false;

    self.repos         = loadAll();
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for repos... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
        $http.get("http://zone47.com/tda/api/autocompletion.php?keyword="+query).then(function (response) {
            console.log(response.data);
            var results =  response.data;

            if (self.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        });
    }

    function searchTextChange(text) {
        $log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
        $log.info('Item changed to ' + JSON.stringify(item));
    }

    /**
     * Build `components` list of key/value pairs
     */
    function loadAll() {
        $http.get("http://zone47.com/tda/api/").then(function (response) {
            console.log(response.data);
            var repos = response.data;
            return repos.map( function (repo) {
                repo.value = repo.label.toLowerCase();
                return repo;
            });
        });
    }
});