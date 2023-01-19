var parrafo = document.querySelector(".texto");
var botton_encrip = document.querySelector(".encriptar");
var textarea = document.querySelector(".resultado");
var botton_des = document.querySelector(".desencriptar");
document.querySelector(".copiar").style.display = "none";
document.querySelector(".resultado").disabled = true;

/*- Si el área de texto está vacía, muestra la clase "persona" y oculta la clase "copiar". 
  - Si el área de texto no está vacía, oculta la clase "persona" y muestra la clase "copiar".*/
function prueba(){
    if(textarea.value === ""){
        document.querySelector(".mensaje").style.display = "block";
        document.querySelector(".persona").style.display = "block";
        document.querySelector(".copiar").style.display = "none";
    }
    else{
        document.querySelector(".mensaje").style.display = "none";
        document.querySelector(".persona").style.display = "none";
        document.querySelector(".copiar").style.display = "block";
    }
}
setInterval(prueba, 100);

function comprobacion(){
    if(textarea.value === true){
        document.querySelector(".mensaje").style.display = "none";
        document.querySelector(".persona").style.display = "none";
        if(copiar.style.display === 'none'){
            copiar.style.display = 'block';
        } 
        else{
            copiar.style.display = 'none';
        }
    }
}

/*- Toma el valor de la entrada, lo itera en una matriz y luego reemplaza las vocales con las palabras que quiero.*/
function encriptador(){
    let expReg = /\W\B|[A-Z]/g;
    cod = expReg.test(parrafo.value); 

    if (cod === true) {
        alert('Evite agregar mayúsculas y caracteres especiales');
    }
    else{
        let vocales = ["a","e","i","o","u"];
        let para = (parrafo.value).split('');
        let tamanho = para.length;
        for(let i = 0; i < tamanho ;i += 1){
            for(let ii = 0 ; ii < tamanho ; ii += 1){
                if(para[ii] == 'a'){
                    para[ii] = "ai";
                }  
                else if(para[ii] == 'o'){
                    para[ii] = "ober";
                }  
                else if(para[ii] == 'e'){
                    para[ii] = "enter";
                }  
                else if(para[ii] == "i"){
                    para[ii] = "imes";
                }  
                else if(para[ii] == "u"){
                    para[ii] = "ufat";
                }  
            }
        }
        let x = para.join('');
        parrafo.value = "";
        textarea.value = x;
        comprobacion();
    }
}

/*- Toma el texto del campo de entrada, lo itera en una matriz, luego compara cada letra con la matriz de vocales y, si encuentra una coincidencia, verifica las siguientes letras para ver si coinciden
   con el patrón de las palabras que deben ser eliminado, y si lo hacen, los elimina.*/
function desencriptador(){
    let expReg = /\W\B|[A-Z]/g;
    cod = expReg.test(parrafo.value);
    
    if (cod == true) {
        alert('Evite agregar mayúsculas y caracteres especiales');
    }
    else{
        textarea.value = "";
        var vocales = ["a","e","i","o","u"];
        let para = (parrafo.value).split('');
        let tamanho = para.length;
        for(let i = 0; i < tamanho ;i += 1){
            for(let ii = 0 ; ii < tamanho ; ii += 1){
                if(vocales[i] == para[ii]){
                    if((para[ii] == "a") && (para[ii + 1] == "i")){
                        para[ii + 1] = "";
                    }
                    if((para[ii] == "o") && (para[ii + 1] == "b") && (para[ii + 2] == "e") && (para[ii + 3] == "r")){
                        para[ii + 1] = "";
                        para[ii + 2] = "";
                        para[ii + 3] = "";
                    }
                    if((para[ii] == "e") && (para[ii + 1] == "n") && (para[ii + 2] == "t") && (para[ii + 3] == "e")){
                        para[ii + 1] = "";
                        para[ii + 2] = "";
                        para[ii + 3] = "";
                        para[ii + 4] = "";
                    }
                    if((para[ii] == "i") && (para[ii + 1] == "m") && (para[ii + 2] == "e") && (para[ii + 3] == "s")){
                        para[ii + 1] = "";
                        para[ii + 2] = "";
                        para[ii + 3] = "";
                    }
                    if((para[ii] == "u") && (para[ii + 1] == "f") && (para[ii + 2] == "a") && (para[ii + 3] == "t")){
                        para[ii + 1] = "";
                        para[ii + 2] = "";
                        para[ii + 3] = "";
                    }
                }
            }
        }
        let x = para.join('')
        parrafo.value = "";
        textarea.value = x;
        comprobacion();
    }
}

/* - Selecciona el área de texto, copia el texto, borra el área de texto y oculta el botón.*/
function copy(){
    document.querySelector(".resultado").disabled = false;
    textarea.select();
    document.execCommand("copy");
    textarea.value = "";
    document.querySelector(".copiar").style.display = "none";
    document.querySelector(".resultado").disabled = true;    
}

document.querySelector(".copiar").addEventListener("click", copy);
botton_encrip.onclick = encriptador;
botton_des.onclick = desencriptador;
