/**
 * Created by venkat on 9/9/15.
 */


var serviceMaster = angular.module('serviceMaster', []);


serviceMaster.service('serviceSlave', function ($http,$q) {
    
    var service=this;
    
    //sqrOf Number
    
    service.square = function (a) {
            return a*a};

   //API caller service
    service.apiCall=function(url,successcb){

        
        var deferred = $q.defer();

        $http.get(url).then(onRes,onErr);

        function onRes(response)
        {
            console.log("Got response...resolving data");
            deferred.resolve(successcb(response.data));
           
        }

        function onErr(reason,status)
        {
            
            console.log(reason.statusText);
            deferred.reject(reason.statusText);
        }
        
       
        return deferred.promise;
        
    }

    });
