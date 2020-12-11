$(document).ready(function(){
    $("#content").load("lorem.html");

    $.each($(".menuButton"), function(mbIndex, mbValue){
        $(mbValue).click(function(event){
            event.preventDefault();
            if($(this).find('a').attr("href") == "fooldal.html"){
                open("fooldal.html", "_self");
            } else{
                $("#content").load($(this).find('a').attr("href"));
            }
        })
    })
});