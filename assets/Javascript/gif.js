var animalBank = ["cat", "dog", "rabbit", "cow"];

$(".btn-success").on("click", function () {
    if ($("#add-animal").val() === "") {
        return;
    }
    var name = $("#add-animal").val().toLowerCase();
    if (animalBank.indexOf(name) >= 0) {
        alert("You have this animal already");
    } else {
        animalBank.push(name);
        var newButton = $("<button>");
        newButton.attr("type", " button");
        newButton.addClass("btn btn-secondary m-1");
        newButton.text(name);
        $("#buttons-show-here").append(newButton);
    }
    $("#add-animal").val("");
    console.log(animalBank);
});

$(document).on("click", ".btn-secondary", function () {
    $("#gifs-show-here").empty();
    var name = $(this).text();

    var queryURL =
        "https://api.giphy.com/v1/gifs/search?q=" +
        name +
        "&limit=15&offset=0&rating=G&lang=en&api_key=4Lj0HItPamXSIoCMHpBnkRZrw0P90kC1";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response.data.length);
        var gifs = response.data;
        var warning = $("<h5>");
        warning.addClass("text-light");
        if (gifs.length === 0) {
            warning.text("No result found.");
            $("#gifs-show-here").append(warning);
            return;
        }
        for (var i = 0; i < gifs.length; i++) {
            var gif = $("<img>");
            gif.addClass("gif-image");
            gif.attr("src", response.data[i].images.fixed_height_small.url);
            gif.attr("alt", name + " image");
            gif.attr("still", response.data[i].images.fixed_height_small_still.url);
            gif.attr("animate", response.data[i].images.fixed_height_small.url);
            $("#gifs-show-here").append(gif);
        }
    });
});

$(document).on("click", ".gif-image", function () {
    console.log($(this).attr("src"));
    console.log($(this).attr("still"));
    if ($(this).attr("src") === $(this).attr("still")) {
        $(this).attr("src", $(this).attr("animate"));
    } else {
        $(this).attr("src", $(this).attr("still"));
    }
});