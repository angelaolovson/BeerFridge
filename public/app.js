// Get the modal element
const modal = document.getElementById('age-verification-modal');

// Get the buttons inside the modal
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

// Check if the user has already verified their age
const verified = localStorage.getItem('age-verified');

// Show the modal if the user has not yet verified their age
if (!verified) {
  modal.style.display = 'block';
}

// Hide the modal and set the age verification status to true when the Yes button is clicked
yesButton.addEventListener('click', function() {
  modal.style.display = 'none';
  localStorage.setItem('age-verified', true);
});

// Redirect to a different page when the No button is clicked
noButton.addEventListener('click', function() {
  window.location.href = 'https://www.google.com';
});


const draggbles = document.querySelectorAll(".shallow-draggable")
const containers = document.querySelectorAll("#allBeerCan")

draggbles.forEach((draggble) => {
  //for start dragging costing opacity
  draggble.addEventListener("dragstart", () => {
    draggble.classList.add("dragging")
  })

  //for end the dragging opacity costing
  draggble.addEventListener("dragend", () => {
    draggble.classList.remove("dragging")
  })
})
//shit
containers.forEach((container) => {
  container.addEventListener("dragover", function (e) {
    e.preventDefault()
    const afterElement = dragAfterElement(container, e.clientY)
    const dragging = document.querySelector(".dragging")
    if (afterElement == null) {
      container.appendChild(dragging)
    } else {
      container.insertBefore(dragging, afterElement)
    }
  })
})

function dragAfterElement(container, y) {
  const draggbleElements = [...container.querySelectorAll(".shallow-draggable:not(.dragging)")]

  return draggbleElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = y - box.top - box.height / 2
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element
}
