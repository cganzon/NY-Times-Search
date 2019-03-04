// Initial variables 
var queryUrl = "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=GOPCdtWayhrv5ArqA9m1VGtG2Mj7UH7T";
var searchTerm = ;
var articleNumbers = ;

// Ajax function to access API
$.ajax



$("#searchBtn").click(createRecord(){

});


$("#clearBtn").click(function(){

});

$("#resultPage").text()

function createRecord(){
    var colRes = $("<div>").addClass("col-sm-12");
    var cardRes = $("<div>").addClass("card");
    var cardBRes = $("<div>").addClass("card-body");
    var pTitle = $("<p>").addClass("card-text");
    var pAuthor = $("<p>").addClass("card-text");
    var pRegion = $("<p>").addClass("card-text");
    var pDate = $("<p>").addClass("card-text");
    var articleURL = $("<a>").attr(...);
    
    $(cardBRes).append(pTitle, pAuthor, pRegion, pDate, articleURL);
    $(cardRes).append(cardBRes);
    $(colRes).append(cardRes);
}


