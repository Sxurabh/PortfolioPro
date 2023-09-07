

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded event fired.");

  // Your existing code for the dark mode toggle
  const themeToggleButton = document.getElementById("theme-toggle-button");
  const toggleInput = document.getElementById("toggle");

  // Retrieve user preference from localStorage
  const storedThemePreference = localStorage.getItem("darkMode");

  // Apply initial theme based on user preference
  const isDarkModePreferred = storedThemePreference === "true";
  applyTheme(isDarkModePreferred);
  toggleInput.checked = isDarkModePreferred;

  // Function to apply the selected theme
  function applyTheme(isDarkMode) {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }

    // Call the function to change the image source based on the mode
    changeImageSource(isDarkMode);
  }

  // Toggle theme on button click
  themeToggleButton.addEventListener("click", () => {
    const isDarkMode = toggleInput.checked;
    applyTheme(isDarkMode);
    console.log('dark-mode');

    // Store user preference in localStorage
    localStorage.setItem("darkMode", isDarkMode.toString());
  });

  // Function to change the image source based on the mode
  function changeImageSource(isDarkMode) {
    const imageElement = document.getElementById("mouse");
    imageElement.src = isDarkMode ? "assets/image/scroll-light.svg" : "assets/image/scroll-dark.svg";
    // You can also change alt text, etc. if needed
  }
});


class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}
const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();

//Maquina de escrever
function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 100 * i);
  });
}
const titulo = document.querySelector(".maquina-escrever");
typeWrite(titulo);

//Scroll TOP
$(document).ready(function () {
  
  var scrollTop = $(".scrollTop");

  $(window).scroll(function () {
    var topPos = $(this).scrollTop();
    //Quantidade Y que o botão de scroll vai aparecer
    if (topPos > 500) {
      $(scrollTop).css("opacity", "1");
    } else {
      $(scrollTop).css("opacity", "0");
    }
  });

  //Velocidade a animação
  $(scrollTop).click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      100
    );
    return false;
  });
});

//Revelar animação
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
  reset: true,
});

//Home delay
sr.reveal(".button", { delay: 200 });
sr.reveal(".linguagensProjeto", { delay: 400 });
sr.reveal(".imagem-espaco-delay", { delay: 200 });
sr.reveal(".imagem-iuri-delay", { delay: 600 });
sr.reveal(".scroll-delay", { delay: 1000 });
//Sobre mim delay
sr.reveal(".imagem-delay", {});
sr.reveal(".titulo-delay", { delay: 200 });
sr.reveal(".descricao-delay", { delay: 400 });
sr.reveal(".cards-interval", { interval: 400 });

//Animação conhecimentos
var texto1 = document.querySelector(".mudarTextoDescricao");

document.querySelector(".html").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "HTML is a markup-based language, where we mark up elements to define what information the page will display. <br><br>";
});

document.querySelector(".css").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "CSS is a “layered” style sheet language created for the purpose of styling HTML pages. <br><br> ";
});

document.querySelector(".js").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "JavaScript is a structured, high-level scripting interpreted programming language with weak dynamic typing and multiparadigm. <br><br> ";
});

document.querySelector(".tailwind").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "Tailwind CSS is a framework designed to maximize the potential of good old CSS and take it even further. <br><br>";
});

document.querySelector(".react").addEventListener("mouseover", function () {
  texto1.innerHTML =
  texto1.innerHTML =
    "React is an open source JavaScript library focused on creating user interfaces on web pages. <br><br> ";
});

document.querySelector(".bootstrap").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "Bootstrap is a UI libraby for CSS. <br><br> ";
});

document
  .querySelector(".styled")
  .addEventListener("mouseover", function mudarTexto8() {
    texto1.innerHTML =
      "Styled Components is a library that uses the concept of CSS-in-JS, that is, it allows us to write CSS codes within Javascript. <br><br> ";
  });

var sairCaixa = document.getElementsByClassName("sairCaixa");

for (i = 0; i < sairCaixa.length; i++) {
  sairCaixa[i].addEventListener("mouseout", function mudarTextoNormal() {
    texto1.innerHTML = `I am convinced that together we will achieve incredible things. 💜<br><br>*mouse over card to read about*`;
  });
}


