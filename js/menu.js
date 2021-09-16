
$(document).ready(function(){
	$('#boton_arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
        $('#boton_arriba').css({ transform: 'scale(1)' });
		if( $(this).scrollTop() > 0 ){
			$('#boton_arriba').show(300);
		} 
        else {
			$('#boton_arriba').hide(300);
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
// BUSCADOR DE PRODUCTOS
const productos=[
	{'nombre':'platano','color':'plo'},
	{'nombre':'durazno','color':'plo'},
	{'nombre':'d','color':'plo'},
	{'nombre':'pacay','color':'plo'},
]
const formulario=document.querySelector('#formulario');
const imagenes=document.querySelector('#imagenes');
// function buscar() {
// 	// console.log(formulario.value);
// 	const nombre=formulario.value.toLocaleLowerCase();
// 	for (let producto of productos){
// 		let buscar=producto.nombre.toLocaleLowerCase();
// 		if (buscar.indexOf(nombre) !== -1) {
// 			console.log(producto.nombre);
// 		}
// 	}
// }
const grid = new Muuri('.grid', {
	layout: {
		rounding: false
	}
});
window.addEventListener('load', () => {
document.querySelector('#formulario').addEventListener('input', (evento) => {
	const busqueda = evento.target.value;
	console.log(busqueda);
	// grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
});
});