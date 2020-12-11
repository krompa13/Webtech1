$(document).ready(function() {
    var car = $("#addcar");
    car.submit(function(e) {
        e.preventDefault();
        var cararray = $(this).serializeArray();
        var obj = {
            name: cararray[0].value,
            consumption: cararray[1].value,
            color: cararray[2].value,
            manufacturer: cararray[3].value,
            avaiable: cararray[4].value,
            year: cararray[5].value,
            horsepower: cararray[6].value,
        };
        console.log(obj);
        $.post({
            type: "POST",
            url: "https://webtechcars.herokuapp.com/api/cars",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(){
                alert("Sikeresen hozzáadva")
            }
        });
    });
});