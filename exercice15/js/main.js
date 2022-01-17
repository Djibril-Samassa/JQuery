$( () => {
    $(".btn").click( function changeTextPosition(){
        $("#text").addClass("class");
        $(".class").attr("class","float-right");
    });
})