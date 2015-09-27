/**
 * Created by venkat on 9/1/15.
 */

app.factory('validateData',function()
{

    return {

        phone: /^[0-9]{10}$/,
        zip:/^[0-9]{5}$/,
        email:'',
        password:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/


    }

});
