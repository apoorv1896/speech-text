# speech-text
# https://apoorv1896.github.io/speech-text/

 HTML Elements Selection:

 main, voicesSelect, textarea, readButton, toggleButton, and closeButton are all variables that hold references to specific elements in the HTML document. These are accessed using document.querySelector or document.getElementById.
 Data:

 data is an array of objects. Each object has an image property (containing a URL to an image) and a text property (containing a descriptive text).
 createBox Function:

 This function creates a box element with an image and a descriptive text.
 It takes an item object as an argument, which is assumed to have an image and a text.
 The function:
 Creates a new div element.
 Sets the class of the element to "box".
 Sets the inner HTML to include an img tag with the src attribute pointing to the image URL, and a p tag for the text.
 Adds an event listener to the box that calls the handleSpeech function when clicked.
 Appends the box to the main element.
 Populating Boxes:
 The data.forEach(createBox) loop iterates over each item in the data array and calls the createBox function to generate the corresponding box.
 Voice Selection:
 The getVoices function retrieves the available voices for speech synthesis. It populates the voicesSelect element with options for each voice.
 Speech Handling Functions:
 handleSpeech(text, box):
 Accepts a text parameter and a box element.
 Sets the text message to be spoken and triggers the speech synthesis.
 Adds and removes the class "active" to the box to apply a visual effect.
 setTextMessage(text):
 Sets the text property of the message object (used for speech synthesis).
 speakText():
 Invokes the speak method of the speech synthesis interface.
 Voice Selection Event:

 setVoice(e):
 Takes an event e as an argument.
 Finds and sets the voice in the voices array that matches the selected option in the voicesSelect element.
 Event Listeners:
 toggleButton:
 Toggles the visibility of a text box (presumably for user input).
 closeButton:
 Closes the text box.
 speechSynthesis.addEventListener("voiceschanged", getVoices):
 Listens for changes in available voices and calls getVoices when voices change. 
 voicesSelect.addEventListener("change", setVoice):
 Listens for changes in the selected voice and calls setVoice when a new voice is selected.
 readButton:
 Reads the text in the textarea element when clicked, using the selected voice.
 Initializing Voices:
 getVoices() is called initially to populate the available voices.
 Overall, this code sets up a UI for select
