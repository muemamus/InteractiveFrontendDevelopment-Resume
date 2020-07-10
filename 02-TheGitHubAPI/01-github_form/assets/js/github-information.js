function fetchGitHubInformation(event) {

    var username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }

    $("#gh-user-data").html(
        `<div id="loader">
            <img src="assets/css/loader.gif" alt="loading..." />
        </div>`);

    $.when(
    	$.getJson(`https:api.github.com/users/${username}`)
    	).then(
    	function(response){
           var userData  = response;
           $('#gh-user-data').html(userInformationHTML(userData));
    	},function(errorResponse){
    		if(errorResponse.stattus == 404){
    			$("#gh-user-data").html(`<h2>No user by the name ${username}</h2>`)
    		}
    		else{
    			console.log(errorResponse);
    			$("#gh-user-data").html(
    				`<h2> error: ${errorResponse.responseJSON.message}<h2>`
    				);

    		}
    	})
}
