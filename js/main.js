contador=0;
bandera=false;
altura;
gravedad;
velocidad;
tiempo;
pixelMetros;
function simulador(){
    a=setInterval(function(){
        document.querySelector("#objeto").style.marginTop=contador+"px";
        contador+=velocidad;
        console.log(gravedad);
        if(contador>pixelMetros){
            clearInterval(a);
            document.querySelector(".modal-body").style.marginBottom="0px";
            bandera=true
           
        }
    },500/(tiempo*1000))
}
function guardarAltura(){
    altura=$("#altura").val();
    document.getElementById("altura").value="";
}
function ajustarDatosMercurio(){
    gravedad=3.7;
    document.getElementById("titulo").innerText+="la tierra";
    ajustarDatos();
}
function ajustarDatosVenus(){
    gravedad=8.87;
    document.getElementById("titulo").innerText+="la tierra";
    ajustarDatos();
}
function ajustarDatosTierra(){
    gravedad=9.807;
    document.getElementById("titulo").innerText+="la tierra";
    ajustarDatos();
}
function ajustarDatosMarte(){
    gravedad=3.71;
    document.getElementById("titulo").innerText+="Marte";
  
    ajustarDatos();
}
function ajustarDatosJupiter(){
    gravedad=24.79;
    document.getElementById("titulo").innerText+="Jupiter";
    ajustarDatos();
}
function ajustarDatosSaturno(){
    gravedad=10.44;
    document.getElementById("titulo").innerText+="Saturno";
    ajustarDatos();
}
function ajustarDatosUrano(){
    gravedad=8.87;
    document.getElementById("titulo").innerText+="Saturno";
    ajustarDatos();
}
function ajustarDatosNeptuno(){
    gravedad=11.15;
    document.getElementById("titulo").innerText+="Saturno";
    ajustarDatos();
}
function ajustarDatosLuna(){
    gravedad=1.62;
    document.getElementById("titulo").innerText+="Luna";
    ajustarDatos();
}
function ajustarDatos(){
   document.querySelector(".modal-body").style.marginBottom="500px";
   console.log(altura);
   pixelMetros=altura*100;
   tiempo=Math.sqrt((2*altura)/gravedad);
   velocidad=gravedad*tiempo;
   if(bandera){
    document.querySelector(".modal-body").style.marginBottom="0px";
   }   
}

function reiniciar(){
    document.querySelector(".modal-body").style.marginBottom="500px";
    contador=0;
    document.querySelector("#objeto").style.marginTop=contador+"px";
    
}
