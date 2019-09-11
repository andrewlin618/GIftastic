var animalBank = ["cat", "dog", "rabbit", "cow"];

$(".btn-success").on("click", function () {
    if ($("#add-animal").val() === "") {
        return;
    }
    var name = $("#add-animal")
        .val()
        .toLowerCase();
    if (animalBank.indexOf(name) >= 0) {
        alert("You have this animal already");
    } else {
        animalBank.push(name);
        var newButton = $("<button>");
        newButton.attr('type',' button')
        newButton.addClass("btn btn-secondary m-1");
        newButton.text(name);
        $("#buttons-show-here").append(newButton);
    }
    $("#add-animal").val("");
    console.log(animalBank);
});
$(document).on("click", ".btn-secondary",function () {
    $("#gifs-show-here").empty();
    var name = $(this).text();

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + name + "&limit=10&offset=0&rating=G&lang=en&api_key=4Lj0HItPamXSIoCMHpBnkRZrw0P90kC1"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response.data[1].images);
        var gifs = response.data
        for (var i = 0; i < gifs.length; i++) {
            var gif = $("<img>");
            gif.attr("src", response.data[i].images.fixed_height_small.url);
            gif.attr("alt", name + " image");
            $("#gifs-show-here").prepend(gif);
            $("#gifs-show-here").prepend("<br>");
        }
    });
});