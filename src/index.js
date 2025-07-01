function displaypoem(response) {
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    }); 
}
function generatePoem(event) {
    event.preventDefault();
    let instructionElement = document.querySelector("#user-instructions");
    let apiKey = "tbf19bo66f32a03f4f87730a62c26921";
    let prompt = `user instutions: Generate a Amharic poem about ${instructionElement.value}`;
    let context = "you are good love poem writer and you love to connet it with nature and you mission is to generate 4 line poem using html . make sure to follow user instructions. I want to see only the poem part not other word, no html word to show in it";
    console.log(`prompt ${prompt}` )
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    axios.get(apiUrl).then(displaypoem);
  
    
}
let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
