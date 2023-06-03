// Make the API request
// Make the API request

document.querySelector("#start").addEventListener("click", function () {
  generateAndChangeWord();
  setInterval(generateAndChangeWord, 20000);
});

function generateNewWord() {
  fetch("https://random-word-api.herokuapp.com/word")
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data
      const randomWord = data[0]; // Assuming the response is an array with a single word
      const finalOutput =
        randomWord.charAt(0).toUpperCase() + randomWord.slice(1);
      document.querySelector(".words").textContent = finalOutput;
      console.log("Random Word:", randomWord);
    })
    .catch((error) => {
      // Handle any errors that occurred during the API request
      console.error("Error:", error);
    });
}

function generateAndChangeWord() {
  generateNewWord();
  setTimeout(newWord, 15000);
  setTimeout(() => {}, 5000);
}

function newWord() {
  document.querySelector(".words").textContent = "Word on wayy!!!";
}
