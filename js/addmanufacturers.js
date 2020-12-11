$(document).ready(function() {
    var manu = $("#addmanufacturer");
    manu.submit(function(e) {
        e.preventDefault();
        var manuarray = $(this).serializeArray();
        var obj = {
            name: manuarray[0].value,
            country: manuarray[1].value,
            founded: manuarray[2].value,
        };
        console.log(obj);
        $.post({
            type: "POST",
            url: "https://webtechcars.herokuapp.com/api/manufacturers",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(){
                alert("Sikeresen hozzáadva")
            }
        });
    })
});