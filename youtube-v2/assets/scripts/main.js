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