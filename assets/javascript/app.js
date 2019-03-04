// Initial variables 
var queryUrl = "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=GOPCdtWayhrv5ArqA9m1VGtG2Mj7UH7T"; // add search terms, number, and years
var searchTerm
var articleMinYear 
var articleMaxYear

// Ajax function to access API
$.ajax({
    url: queryUrl,
    method: "GET"
}).then(function(response) {
    console.log(response);

});