// Initial variables 
<<<<<<< HEAD
var queryUrl = "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=GOPCdtWayhrv5ArqA9m1VGtG2Mj7UH7T"; // add search terms, number, and years
var searchTerm = $("#searchInput1").val();
var articleNumber = $("#numberOfRecords1").val();
var minYear = $("#startYear1").val();
var maxYear = $("#endYear1").val();

$("#searchBtn").on("click", function () {
    console.log(searchTerm);
    console.log(minYear);
    console.log(maxYear);
    // Ajax function to access API
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);

    });
})
=======
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


>>>>>>> 5f1907c50b160036e2d5eda59f9f1dd3ec90fa03
