// Select id="titleText" and save it in a variable titleText
const titleText = document.getElementById('titleText');

// Select id="clickMe" and save it in a variable button
const button = document.getElementById('clickMe');

// Store the original text of titleText
const originalText = titleText.textContent;

// When button is clicked, change the text of titleText
button.addEventListener('click', () => {
  // Check if the current text is the original text
  if (titleText.textContent === originalText) {
    // Change the text to 'Hello JavaScript InnerHTML!'
    titleText.textContent = 'Hello JavaScript InnerHTML!';
  } else {
    // Change the text back to the original text
    titleText.textContent = originalText;
  }
});