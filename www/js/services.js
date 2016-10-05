angular.module('psalmstoday')

// HomeController
.service('PsalmService', function($http, $q) {
    var url = 'http://cozinhapp.sergiolopes.org/produtos';

    return {
        lista: function() {
            return $http.get(url).then(function(response){
                return response.data;
            });
        }
    };
});