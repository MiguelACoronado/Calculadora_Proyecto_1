const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonOn = boton.textContent;
        
        if (boton.id ==="limpiar") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id ==="borrar") {
            if (pantalla.textContent.length === 1 ) {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0,-1);
            }
            return;
        }

        const textoPantalla = pantalla.textContent;

        if(boton.id === "igual" && textoPantalla === "//"){
            pantalla.textContent = "¡Error!";
        }else if(boton.id === "igual" && textoPantalla.includes("//")){
            pantalla.textContent = "¡Error!";
        }

        
        if(boton.id === "igual") {
            try{
                pantalla.textContent = eval(pantalla.textContent);
            } catch{
                pantalla.textContent ="¡Error!";
            }
            
            return;
        }

        
        

        if(pantalla.textContent ==="0" || pantalla.textContent === "¡Error!") {
            pantalla.textContent = botonOn;
        } else {
            pantalla.textContent += botonOn;
        }
        
    })
})