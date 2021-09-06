
$(document).ready(function(){
	$('#boton_arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('#boton_arriba').show(0);
		} 
        else {
			$('#boton_arriba').hide(200);
		}
	});

});
// function subir_arriba(){
//     var boton_arriba= document.documentElement.scrollTop ||
// 	document.body.scrollTop;
//     if(boton_arriba>0){
//         // window.requestAnimationFrame(subir_arriba);
//         // window.scrollTo(0,boton_arriba-(boton_arriba/5));
//         window.scrollTo(0,0);
//     }
// }
// buttonUp=document.getElementById("boton_arriba");
// window.onscroll=function(){
//     var scroll= document.documentElement.scrollTop ||
// 	document.body.scrollTop;document.documentElement.scrollY;

//     if(scroll>100){
//         buttonUp.style.transform="scale(1)";
//     }else{
//         buttonUp.style.transform="scale(0)";
//     }
    
// }

// EVENTO PARA MOSTRAR 
function open_close_menu(){
    document.getElementById("menu_side").style.width = "250px";
}
// EVENTO PARA OCULTAR
function close_menu(){
    document.getElementById("menu_side").style.width = "0px";
}
// EVENTO SELECCIONAR
function selected(){
   var m= document.getElementById("selected");
   m.className="selected"
}

