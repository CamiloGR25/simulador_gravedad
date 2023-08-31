contador=0;
bandera=false;
altura;
gravedad;
velocidad;
tiempo;
function simulador(){
    a=setInterval(function(){
        document.querySelector("#objeto").style.marginTop=contador+"px";
        contador+=velocidad;
        if(contador>500){
            clearInterval(a);
            document.querySelector(".modal-body").style.marginBottom="0px";
            bandera=true
           
        }
    },500/(tiempo*1000))
}
function ajustarDatos(){
   document.querySelector(".modal-body").style.marginBottom="500px";
   altura=2;
   gravedad=9,8
   tiempo=Math.sqrt((2*altura)/gravedad);
   velocidad=gravedad*tiempo;
   
   document.getElementById("titulo").innerText+="la tierra"
   if(bandera){
    document.querySelector(".modal-body").style.marginBottom="0px";
   }
   
}
function reiniciar(){
    contador=0;
    document.querySelector("#objeto").style.marginTop=contador+"px";
    document.querySelector(".modal-body").style.marginBottom="500px";
    
}
