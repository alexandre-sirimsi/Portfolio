particlesJS("particles-container", {
    "particles": {
        "number": {
            "density": {
                "enable": true,
                "value_area": 4000
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.8,
            "random": true
        },
        "size": {
            "value": 4,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 176,
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3.5,
            "random": true,
            "out_mode": "bounce"
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 250
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});
var update = () => {
    requestAnimationFrame(update);
};
requestAnimationFrame(update);;
var navigate = (event) => {
    var sender = event.target || event.srcElement;
    var current = document.querySelector(".menu-inner>a.active");
    current.className = current.className.replace(" active", "");
    sender.className += " active";
}
var nodes = document.querySelectorAll('.menu-inner>a');
nodes.forEach((item) => item.addEventListener("click", navigate));
window.location.href = '#bio';
