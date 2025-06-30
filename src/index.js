function generatePoem(event) {
    event.preventDefault();
    new Typewriter("#poem", {
        strings: " ሰው አፈር ነው አሉ – ታጥቦ የማይጠራ",
        autoStart: true,
        delay: 1,
        cursor: "",
    });
    
}
let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
