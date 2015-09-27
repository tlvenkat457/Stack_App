

var app=angular.module('single-page-app',['ngRoute','serviceMaster']);

app.controller('cfgController',function($scope,$http,$timeout,validateData,serviceSlave){
    console.log("An attempt for Registration ");

    var api_calls={
        postal_us:"http://api.zippopotam.us"
    };
        $scope.answer = serviceSlave.square(2);
    $scope.location ="USA";

    $scope.fields=true;

    $scope.validData=validateData;

    $scope.oneBinding='Hi User';

    $scope.validateUserName = function(uname)
    {


        var usedUnames =['venkat','krishna'];

             for(var i=0;i<usedUnames.length;i++)
                {

                    if(uname===usedUnames[i])
                    {

                        console.log('Username already exists. ');

                        $scope.regForm.uname.$setValidity("unameAvailable", false);

                        break;

                    }

        else
        {
            console.log('Username available. ');
            $scope.regForm.uname.$setValidity("unameAvailable", true);



        }

    }


    };


    $scope.validateLocation = function()
    {

        console.log("Verifying zip.....");



        if($scope.user.zip.length=="5" && $scope.user.zip!="")
        {

            console.log("Zipcode matched with US");
           console.log("Getting the data from api"+api_calls.postal_us+"/US/"+$scope.user.zip);

           var locationBuffer =serviceSlave.apiCall(api_calls.postal_us+"/US/"+$scope.user.zip,function(locationDetails){

            if(locationBuffer!=false)
            {
                        $scope.locationDetails=locationDetails;
                        console.log("Showing the location details "+$scope.locationDetails);
                        $scope.fields=false;         
            }
              
           });


        }

    };


    $scope.regValidate = function(userData,formName)
    {

        console.log('got the details');
    }

   // $scope.userNameCheck=checkUserName($scope.user.uname);





});

app.controller('searchNow',function($scope,$http)

{
    $scope.searchWelcome='search here';


   console.log('in the search controller');

    $scope.search = function(searchValue)
    {

        console.log('search function called');
    }


});

app.controller('events',function($scope,$http)

{


        console.log('events function called');



});



app.config(function($routeProvider){



    $routeProvider.when('/register',{
            templateUrl: 'register.html',
        controller:'cfgController'
        }).when('/search',{
        templateUrl:'search.html',
        controller:'searchNow'

    }).when('/events',{
        templateUrl:'Events.html',
        controller:'eventControl'

    })
});
