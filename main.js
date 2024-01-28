$(document).ready(function(){
    $("#rood").click(function(){
        $("#kleur").css("color", "red");
    });
    $("#groen").click(function(){
        $("#kleur").css("color", "green");
    });
    $("#terug").click(function(){
        $("#kleur").css("color", "black");
    });
});
$(document).ready(function() {
    $("#knop").click(function() {
        var naam = $("#idtekstveld1").val();
        var achternaam = $("#idtekstveld2").val();
        var email = $("#idtekstveld3").val();
        window.alert(naam +" " + achternaam + ", u bent geregistreerd op dit mail adres:  " + email);
    });
});
$(document).ready(function(){
    $("#slideup").click(function(){
        $("p").slideUp();
    });
    $("#slidedown").click(function(){
        $("p").slideDown();
    });
});