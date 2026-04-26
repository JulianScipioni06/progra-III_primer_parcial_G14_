let tabs = document.querySelectorAll(".tabs-nav .tab-btn");
let sections = document.querySelectorAll(".tab-section");

tabs.forEach(tab => {
    tab.addEventListener("click", function() {
        
        tabs.forEach(t => t.classList.remove("active"));
        sections.forEach(s => s.classList.remove("active"));

        this.classList.add("active");

        let targetId = this.getAttribute("data-target");

        document.getElementById(targetId).classList.add("active");
        
    });
});

let formularioCompra = document.getElementById("formulario-compra");

let inputNombre = document.getElementById("nombre");
let inputTelefono = document.getElementById("telefono");
let inputEmail = document.getElementById("email");
let inputDireccion = document.getElementById("direccion");

formularioCompra.addEventListener("submit", function(evento) {

    evento.preventDefault();

    let nombre = inputNombre.value.trim();
    let telefono = inputTelefono.value.trim();
    let email = inputEmail.value.trim();
    let direccion = inputDireccion.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresá tu nombre completo.");
        inputNombre.focus(); 
        return; 
    }

    if (telefono === "") {
        alert("Por favor, ingresá un número de teléfono de contacto.");
        inputTelefono.focus();
        return;
    }

    if (email === "") {
        alert("Por favor, ingresá un correo electrónico válido.");
        inputEmail.focus();
        return;
    }

    if (direccion === "") {
        alert("Por favor, indicanos a qué dirección enviamos el pedido.");
        inputDireccion.focus();
        return;
    }
    
    alert("¡Próximamente! La función de envío de pedidos se encuentra en desarrollo.");
    
    formularioCompra.reset();
});