angular.module('psalmstoday')
.service('PsalmsService', function($http, $q){
    var url = 'data/psalmsData.json';
    
    return {
        lista: function(){
            return $http.get(url).then(function(response){
                return response.data;
            });
        }
    };
});