$(document).ready(function() {
    var car = $("#modifycar");
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
$(document).ready(function() {
    var car = $("#modifycar");
    car.submit(function(e) {
        e.preventDefault();
        var cararray = $(this).serializeArray();
        var obj = {
            name: cararray[1].value,
            consumption: cararray[2].value,
            color: cararray[3].value,
            manufacturer: cararray[4].value,
            avaiable: cararray[5].value,
            year: cararray[6].value,
            horsepower: cararray[7].value,
        };
        console.log(obj);
        $.post({
            type: "POST",
            url: "https://webtechcars.herokuapp.com/api/cars",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(){
                alert("Sikeresen módosítva")
            }
        });
    });
});