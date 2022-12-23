// External JavaScript 
function handleMouseover() {
  console.log('Mouseover');

  // TODO: change the text on mouseover to 'Thanks for Hovering'
}

// TODO: handle appropriate mouse event
//  When mouse leaves the button, change the label 'Mouseover here pls' 

function handleChangeBgColor() {
  const divEl = document.getElementById('myDiv');
  console.dir(divEl);
  divEl.style.backgroundColor = 'red';
}

// TODO: Change Text Color to White on Click of the button


function handleLocateMe() {
  // firing the permission screen
  navigator.geolocation.getCurrentPosition(locationAccessGranted, locationAccessDenied)
}

function locationAccessGranted(position) {
  console.log('inside locationAccessGranted');
  console.log(position);
  document.getElementById('latitude').innerText = position.coords.latitude;
  document.getElementById('longitude').innerText = position.coords.longitude;
}

function locationAccessDenied() {
  console.log('inside locationAccessDenied');
}


// Drag and Drop API Demo
function handleDragStart(event){
  console.log('Started Dragging');
  console.log(event);
  event.dataTransfer.setData('draggedBox', event.target.id);
}

function handleDragOver(event) {
  console.log('Inside handleDragOver');
  // Let's allow dropping by stopping the default nature of this event
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();
  console.log(event.dataTransfer.getData('draggedBox'));
  // Fetching the id of the element from dataTransfer
  const draggedElId = event.dataTransfer.getData('draggedBox');
  
  // appending the element inside droppableBox
  document.getElementById('droppableBox').append(document.getElementById(draggedElId))
}

/* Submitting form data from contact page -- AJAX Demo */
function handleContactFormSubmit(event){
  event.preventDefault();
  console.log('Inside handleContactFormSubmit');
  // read the form data and preparing to send it as obj
  const formData = {
    name: document.getElementById('nameInput').value,
    phone: document.getElementById('phoneInput').value,
    email: document.getElementById('emailInput').value,
    query: document.getElementById('queryInput').value,
  }
  console.log(formData);

  // what's the backend url?
  // https://jsonplaceholder.typicode.com/users

  // What's the http method - POST
  // What's the data? formData

  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    console.log('Inside onreadystatechange');
    // the readyState will change 4 times - check this.readyState
    if(this.readyState == 4 && this.status == 201) {
      document.getElementById('confirmation').style.display = 'block';
    }
  }

  console.log('Before sending');
  xhttp.open('POST', 'https://jsonplaceholder.typicode.com/users');
  xhttp.send(formData);

}

// Webworker Demo 
const first = document.querySelector('#number1');
const second = document.querySelector('#number2');
const result = document.querySelector('.result');

if (window.Worker) {
  console.log('Loading calc-worker.js');
  // loading a JS file in the background
  const calcWorker = new Worker("./assets/scripts/calc-worker.js");
  
  first.onchange = function () {
    calcWorker.postMessage([first.value, second.value]);
    console.log('Message posted to worker');
  }
  
  second.onchange = function () {
    calcWorker.postMessage([first.value, second.value]);
    console.log('Message posted to worker');
  }

  // we are receiving the multiplied output sent by calc-worker.js 
  calcWorker.onmessage = function(event) {
    console.log(event.data);
    result.innerText = event.data;
  }
} else {
  console.log('Your browser doesn\'t support web workers.');
}

/* === Web worker ended === */

/* Custom Elements Demo */
// create a class for the custom element 
// Let's create autonomous custom element 
class PopUpInfo extends HTMLElement {
  constructor() {
    // always call super in constructor 
    super();

    // create a shadow root -- inside this all following elements will be appended 
    const shadow = this.attachShadow({mode: 'open'});

    // create span element
    const span = document.createElement('span'); // <span></span>
    span.setAttribute('class', 'wrapper'); // <span class='wrapper'></span>

    // reading texts from attributes of this custom element 'popup-info' 
    const text = this.getAttribute('data-msg');
    span.textContent = text;

    // let's add the relevant css stuff 
    const style = document.createElement('style'); // <style></style>
    style.textContent = `
      .wrapper {
        position: relative;
        color: red;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(span);
  }
}

// expose the class as custom element -- using customElements.define()
customElements.define('popup-info', PopUpInfo);