particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 90,
      "density": {
        "enable": true,
        "value_area": 800
          
      }
      
   
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 2,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 7
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 3,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 250,
      "color": "fff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
      
    }
  },
  "interactivity": {
    "detect_on": "canvas",
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
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 300,
        "size": 70,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 500,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
 
});

// JavaScript-код
const target = document.querySelector('.animation-target');
const words = ['JavaScript', 'CSS', 'HTML'];

let wordIndex = 0;
let letterIndex = 0;

function type() {
  if (letterIndex < words[wordIndex].length) {
    // Виводимо на екран літеру за літерою
    const span = document.createElement('span');
    span.textContent = words[wordIndex].charAt(letterIndex);
    target.appendChild(span);
    letterIndex++;
    setTimeout(type, 100);
  } else {
    // Якщо слово написане, то затримуємо його на екрані протягом 1 секунди
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (letterIndex > 0) {
    // Стираємо літеру за літерою
    const span = target.querySelector('span:last-child');
    span.parentNode.removeChild(span);
    letterIndex--;
    setTimeout(erase, 50);
  } else {
    // Якщо слово стерто, то переходимо до наступного слова
    wordIndex++;
    if (wordIndex >= words.length) {
      wordIndex = 0;
    }
    setTimeout(type, 500);
  }
}

type(); // Починаємо анімацію з першим словом
