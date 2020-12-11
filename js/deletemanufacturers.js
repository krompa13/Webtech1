$(document).ready(function() {
    var manu = $("#deletemanufacturer");
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