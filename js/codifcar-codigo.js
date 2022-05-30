
var botonEncriptar=document.querySelector(".boton-codificar");
var matrizdescodificar=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
var textoCodificado;

botonEncriptar.onclick=desencriptar;
function desencriptar(){
    var matrizdescodificar=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    var textoACodificar=document.querySelector(".campo-para-codificar").value;
    textoACodificar=textoACodificar.toLowerCase();
    if(textoACodificar.length==0){

        ;
        document.querySelector("#texto-descodificado").classList.add("invisible");
        document.querySelector("#boton-copiar").classList.add("invisible");

        
        aparecer("#no-info","campo-decpdificado");
        

       

        ;
    }else{
        for(let i=0; i<matrizdescodificar.length;i++){
            
        
        
            if(textoACodificar.includes(matrizdescodificar[i][0])){
                
                textoACodificar=textoACodificar.replaceAll(matrizdescodificar[i][0],matrizdescodificar[i][1]);


                
               
    
            }
        }

        
        aparecer("#texto-descodificado","campo-decpdificado");
        aparecer("#boton-copiar","boton-copiar");
        
        document.querySelector("#no-info").classList.add("invisible");
        

        textoCodificado=textoACodificar;
        document.querySelector("#texto-descodificado").textContent=textoCodificado;



        
    }


    console.log(textoACodificar);

    
}


function aparecer (id,clase){
    document.querySelector(id).classList.add(clase);
    document.querySelector(id).classList.remove("invisible");
}