$(document).ready(function() {
    var manu = $("#modifymanufacturer");
    manu.submit(function(e) {
        e.preventDefault();
        var manuarray = $(this).serializeArray();
        console.log(manuarray[0].value);
        var obj = {
            _id: manuarray[0].value,
        };
        console.log(obj);
        $.ajax({
            type: "DELETE",
            url: "https://webtechcars.herokuapp.com/api/manufacturers/" + manuarray[0].value,
        });
    })
});
$(document).ready(function() {
    var manu = $("#modifymanufacturer");
    manu.submit(function(e) {
        e.preventDefault();
        var manuarray = $(this).serializeArray();
        var obj = {
            name: manuarray[1].value,
            country: manuarray[2].value,
            founded: manuarray[3].value,
        };
        console.log(obj);
        $.post({
            type: "POST",
            url: "https://webtechcars.herokuapp.com/api/manufacturers",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(){
                alert("Sikeresen módosítva")
            }
        });
    })
});