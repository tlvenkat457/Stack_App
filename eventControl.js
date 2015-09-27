/**
 * Created by venkat on 8/31/15.
 */



app.controller('eventControl',function($scope,eventData)
{

    $scope.createEvent=function(event,newEventForm) {




        if(newEventForm.$valid)
        {

            alert("created event " +event.ename);

        }
        else
        {
            alert("Invalid form");
        }


    }
    
    
    $scope.cancelEvent= function () {


        window.location='/Events.html';
    }
});