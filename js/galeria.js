$(document).ready(function(){
    $(".enlaces").click(function(){
        let valor=$(this).attr("data-nombre");
        if(valor==="inicio"){
            $(".filtro").show(1000)
        }
        else{
            $(".filtro").not("."+valor).hide(1000);
            $(".filtro").filter("."+valor).show(1000);
        }
        $(".enlaces").click(function(){
            $(this).addClass("activo").siblings().removeClass("activo");
        });
    });
});
