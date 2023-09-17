document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");

    const links = document.querySelectorAll("nav ul li a, .botoes a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            loader.style.display = "flex";

            setTimeout(function() {
                window.location.href = link.href;
            }, 500); 
        });
    });

    document.addEventListener('keydown', function(event) {
        const key = event.key.toLowerCase();
        const links = document.querySelectorAll('a[accesskey]');

        links.forEach(link => {
            if (link.getAttribute('accesskey').toLowerCase() === key) {
                event.preventDefault();
                window.location.href = link.href;
            }
        });
    });

    document.getElementById("increase-font-size").addEventListener("click", function() {
        changeFontSize(1);
    });

    document.getElementById("decrease-font-size").addEventListener("click", function() {
        changeFontSize(-1);
    });

    function changeFontSize(step) {
        var currentFontSize = parseFloat(getComputedStyle(document.body).fontSize);
        var newFontSize = currentFontSize + step;
        document.body.style.fontSize = newFontSize + "px";
    }
});

const modeSwitch = document.getElementById("mode-switch");
const header = document.querySelector("nav");

modeSwitch.addEventListener("change", function() {
    if (modeSwitch.checked) {
        // Ativar o light mode para o header
        header.classList.add("light-mode");
        header.classList.remove("dark-mode");
    } else {
        // Ativar o dark mode para o header
        header.classList.remove("light-mode");
        header.classList.add("dark-mode");
    }
});

// O código para o footer permanece o mesmo
const footer = document.querySelector(".footer");

modeSwitch.addEventListener("change", function() {
    if (modeSwitch.checked) {
        // Ativar o light mode para o footer
        footer.classList.add("light-mode");
        footer.classList.remove("dark-mode");
    } else {
        // Ativar o dark mode para o footer
        footer.classList.remove("light-mode");
        footer.classList.add("dark-mode");
    }
});