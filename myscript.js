	document.getElementById("button").addEventListener("click", makePOSTRequest)
	
	function makePOSTRequest() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this);
       }
    };
    // open(method, url, async)
    xhttp.open("POST", "https://cors-anywhere.herokuapp.com/http://careerdev-teaching-lujason2015.c9users.io/api", true);
    
    // set header to match get request
    xhttp.setRequestHeader("Content-type", "application/json");
    const data = {
    	"username": document.getElementById("username").value,
    	"password": document.getElementById("password").value,
    };
    // console.log(data);
    xhttp.send(JSON.stringify(data));                                              
}