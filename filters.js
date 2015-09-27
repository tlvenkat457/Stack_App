/**
 * Created by venkat on 8/31/15.
 */

'use strict';


app.filter('durations',function(){

return function(duration){

    switch(duration) {
        case 1:

            return "half day";


        case 2:

            return "full day";

        case 3:

            return "half day";

        case 4:

            return "full day";

        default:
            return "Not found";

    }
}

});