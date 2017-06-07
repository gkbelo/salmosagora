angular.module('salmosagora')

.service('SalmosService', function($http, $q){
    var url = 'data/psalmsData.json';
    
    return {
        dados: function(){
            return $http.get(url).then(function(response){
                return response.data;
            });
        }
    };
})
;