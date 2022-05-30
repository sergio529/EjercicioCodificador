
var botonEncriptar=document.querySelector(".boton-descodificar");
var matrizdescodificar=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
var textoDescodificado;

botonEncriptar.onclick=desencriptar;
function desencriptar(){
    var matrizdescodificar=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    var textoADescodificar=document.querySelector(".campo-para-codificar").value;
    
    if(textoADescodificar.length==0){

        ;
        document.querySelector("#texto-descodificado").classList.add("invisible");
        document.querySelector("#boton-copiar").classList.add("invisible");

        
        aparecer("#no-info","campo-decpdificado");
        

       

        ;
    }else{
        for(let i=0; i<matrizdescodificar.length;i++){
            
        
        
            if(textoADescodificar.includes(matrizdescodificar[i][1])){
                
                textoADescodificar=textoADescodificar.replaceAll(matrizdescodificar[i][1],matrizdescodificar[i][0]);


                
               
    
            }
        }

        
        aparecer("#texto-descodificado","campo-decpdificado");
        aparecer("#boton-copiar","boton-copiar");
        
        document.querySelector("#no-info").classList.add("invisible");
        

        textoCodificado=textoADescodificar;
        document.querySelector("#texto-descodificado").textContent=textoCodificado;



        
    }


    console.log(textoADescodificar);

    
}


function aparecer (id,clase){
    document.querySelector(id).classList.add(clase);
    document.querySelector(id).classList.remove("invisible");
}


function copiarTexto() {

    var texto = document.getElementById("texto-descodificado");
    navigator.clipboard.writeText(texto.textContent);
  
   
}
var ckBotonCopiar=document.querySelector("#boton-copiar");
ckBotonCopiar.onclick=copiarTexto;
