/*
*Convert the user input form data to JSON string
*/
function submitHandler(e){
            e.preventDefault();
            /*
            *Extract the information 
            */
            var data = {
                username : $("#username").val(),
                userid : $('#userid').val(),
                password : $('#password').val(),
                activeconn: $('#activeconn').val(),
                epbcs: ""+$('#EPBCS').is(":checked"),
                fccs: ""+$('#FCCS').is(":checked"),
                eprcs: ""+$('#EPRCS').is(":checked"),
                mobilenumber: $('#mobilenumber').val(),
                alexauseremail: $('#alexauseremail').val(),
                amazonusername: $('#amazonusername').val()
            };
            console.log(data);
            
            /* 
            * Parse the data into JSON Format and send to AWS API Gateway
            */
           sendToGateway(data);
}


/*
*Send the JSON String to AWS API Gateway
*/
function sendToGateway(data){

    //var URL = "https://yngg9cci5h.execute-api.us-east-1.amazonaws.com/TestStage/insertToDb"; //Replace with API Gateway Endpoint
    var URL = "https://yy1uad0l7g.execute-api.us-east-1.amazonaws.com/TestPy/putToDbdotPy";
    //var URL = "https://yy2krrjje6.execute-api.us-east-1.amazonaws.com/Test/putToDatabaseDotPy";
    /*
    * Send the data to API Gateway using POST Method
    */
    $.ajax({
        type: "POST",
        url: URL,
        dataType: "JSON",
        crossDomain: "true",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),

        success: function(){
            console.log(data);
            console.log("Successful");
            //document.getElementById("userform").reset();
            //location.reload();
        },
        error: function(){
            console.log("Operation failed");
            /*
            * TODO : REDIRECT TO ERROR PAGE
            */
        }
   });

}


