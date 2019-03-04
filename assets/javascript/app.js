// Initial variables 
var queryUrl = "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=GOPCdtWayhrv5ArqA9m1VGtG2Mj7UH7T";
var searchTerm = $("#searchInput1").val();
var articleNumber = $("#numberOfRecords1").val();
var minYear = $("#startYear1").val();
var searchTerm = $("#endYear1").val();

$("#searchBtn").click(function () {
    console.log(searchTerm);
    console.log(articleNumber);
    createRecord();
    // Ajax function to access API
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });

});


$("#clearBtn").click(function () {

});

$("#resultPage").text()

function createRecord() {
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


