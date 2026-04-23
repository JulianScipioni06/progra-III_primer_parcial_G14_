const tabs = document.querySelectorAll(".tab-btn");
const sections = document.querySelectorAll(".tab-section");

tabs.forEach(tab => {
    tab.addEventListener("click", function() {
        
        tabs.forEach(t => t.classList.remove("active"));
        sections.forEach(s => s.classList.remove("active"));

        this.classList.add("active");

        const targetId = this.getAttribute("data-target");

        document.getElementById(targetId).classList.add("active");
        
    });
});

let pedir = document.querySelectorAll("#pedir");
let borrar = document.querySelectorAll("#borrar");

pedir.addEventListener("click", function() {
    alert('Todavia no esta hecha esta funcion');
});