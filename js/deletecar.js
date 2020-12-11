$(document).ready(function() {
    var car = $("#deletecar");
    car.submit(function(e) {
        e.preventDefault();
        var cararray = $(this).serializeArray();
        console.log(cararray[0].value);
        var obj = {
            _id: cararray[0].value,
        };
        console.log(obj);
        $.ajax({
            type: "DELETE",
            url: "https://webtechcars.herokuapp.com/api/cars/" + cararray[0].value,
        });
    })
});