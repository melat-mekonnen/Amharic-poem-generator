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
    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden")
    poemElement.innerHTML = `<div class="generating">⌛ Generating Amharic poem about ${instructionElement.value}</div>`;
    let apiKey = "tbf19bo66f32a03f4f87730a62c26921";
    let prompt = `user instutions: Generate a Amharic poem about ${instructionElement.value}`;
    let context = "you are good love poem writer and you love to connet it with nature and you mission is to generate 4 line poem using basic html and separate each lire using<br> . make sure to follow user instructions i want to stop the writting after it do once.I want only the poem with no html word and also no other explanation and it should have poem title with stanza now add this at the end <strong> SheCodes AI</strong>.";
    console.log(`prompt ${prompt}` )
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
   
 axios.get(apiUrl).then(displaypoem);
  
    
}


let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
