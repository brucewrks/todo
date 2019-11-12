var editor = document.getElementById('editor');

// Restores if necessary
var previousState = window.localStorage.getItem('list');
if (previousState) {
  editor.innerHTML = previousState;
}

// Input management
function inputManagement() {
  var inputs = Array.prototype.slice.call(document.getElementsByTagName('input'));

  var foundEmpty = false;
  var foundInputs = [];

  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];

    if (input.value == '') {
      foundEmpty = true;
      foundInputs.push(input);
    }

    input.setAttribute('value', input.value);
  }

  // Refresh editor
  editor = document.getElementById('editor');

  // Add a new one if necessary
  if (!foundEmpty) {
    console.log('Adding another input');
    var newInput = document.createElement('input');
    newInput.setAttribute('type', 'text');
    editor.appendChild(newInput);
  }

  for (var i = 0; i < foundInputs.length; i++) {
    var input = foundInputs[i];
    if (inputs.indexOf(input) === (inputs.length - 1)) continue;
    editor.removeChild(input);
  }
}
setInterval(inputManagement, 250);

// Saves Editor state for refreshes
function saveEditor() {
  var editorState = editor.innerHTML;
  window.localStorage.setItem('list', editorState);
}
setInterval(saveEditor, 1000);
