{
    function mostrar_indicadores(id){
        let div = document.getElementById(id);
        if (div.style.display == "none"){
            div.style.display = "flex";
        }
    }
    
    function mostrarocult_boton(id){
        let button = document.getElementById(id);
        if (button.style.display == "none"){
            button.style.display = "flex";
        }
        else{
            button.style.display = "none";
        }
        let textborrar = document.getElementById('preg');
        textborrar.style.display = "none"
    }
    function mostrardiv(id){
        let div = document.getElementById(id);
        if (div.style.display == "none"){
            div.style.display = "flex"
        }
    }
    
    class Letra {
        constructor() {
          this.valor = 0;
        }
      
        actualizarValorSI() {
          this.valor += 1;
        }
        actualizarValorNO(){
            this.valor -= 0;
            
        }
    
        
      }   
    const R = new Letra();
    const I = new Letra();
    const A = new Letra();
    const S = new Letra();
    const E = new Letra();
    const C = new Letra();
    

    function respondiosi(letra0){
        if (letra0 == 'R'){
            R.actualizarValorSI();
        }
        if (letra0 == 'I'){
            I.actualizarValorSI();
        }
        if (letra0 == 'A'){
            A.actualizarValorSI();
        }
        if (letra0 == 'S'){
            S.actualizarValorSI();
        }
        if (letra0 == 'E'){
            E.actualizarValorSI();
        }
        if (letra0 == 'C'){
            C.actualizarValorSI();
        }
    }
    function respondiono(letra0){
        letra0 = "no hace nada esto,ignorar"
    }
    function mostrar_resultados(){
        document.querySelector("#r").textContent = R.valor;
        document.querySelector("#i").textContent = I.valor;
        document.querySelector("#a").textContent = A.valor;
        document.querySelector("#s").textContent = S.valor;
        document.querySelector("#e").textContent = E.valor;
        document.querySelector("#c").textContent = C.valor;
    }

   
}

