//https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8
var API_URL = "https://autosuggest-backend.onrender.com/api/autosuggest";

var searchbar = document.getElementById("search");
var suggestionsbar = document.getElementById("search-suggestions");

//get user tupe data
//use user typt data in the query to the api call
//to api call
//append to all the search suggestions to div tag in upi


searchbar.addEventListener("input", function(){
    var query = searchbar.value.trim();
    if(query) {
        fetchSuggestions(query);
    }
})

function fetchSuggestions(query){
    var fullApi = API_URL + "?q=" + query + "&weighted=true&algorithm=trie&limit=8";
    fetch(fullApi)
    .then(function(res){
        return res.json();

    })
    .then(function(data){
        console.log(data);
        showsuggestions(data);
    })

    .catch(function(err){
        console.log("Error : " + err);
    })
   
    function showsuggestions(data){
        var values = data.results;
        if(data.count==0){
            suggestionsbar.innerHTML = "<div>No matching suggestions found</div>";
        }else{
            var htmlstring = "";
            for(var i = 0; i < values.length; i++){
                htmlstring += "<div class='suggestionitem'>" + values[i].text + "</div>";
            }
            suggestionsbar.innerHTML = htmlstring;
        }
    }
}


