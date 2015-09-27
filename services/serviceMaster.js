/**
 * Created by venkat on 9/9/15.
 */


var serviceMaster = angular.module('serviceMaster', []);


serviceMaster.service('serviceSlave', function ($http,$q) {
    //sqrOf Number
    this.square = function (a) {
            return a*a};

   //API caller service
    this.apiCall=function(url,successcb){

        var deferred = $q.defer();

        $http.get(url).then(onRes,onErr);

        function onRes(response)
        {
            console.log("Got response");
            deferred.resolve(response.data);
            return successcb(response.data);
        }

        function onErr(reason)
        {
            console.log("api call returned error "+reason.error.message);
            deferred.reject(false);
        }
        
        deferred.promise();
        
    }

    });
