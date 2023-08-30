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
    },tiempo*100)
}
function ajustarDatos(){
   document.querySelector(".modal-body").style.marginBottom="500px";
   altura=20;
   gravedad=9,807
   velocidad=Math.sqrt(2*altura*gravedad);
   tiempo=Math.sqrt((2*altura)/gravedad);
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
