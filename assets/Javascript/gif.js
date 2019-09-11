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
        newButton.addClass("btn btn-secondary m-1");
        newButton.attr("animal-name", name);
        newButton.text(name);
        $("#buttons-show-here").append(newButton);
    }
    $("#add-animal").val('');
    console.log(animalBank);
});


$(".btn-secondary").on("click", function () {

});