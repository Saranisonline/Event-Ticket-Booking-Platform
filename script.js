const modal = document.getElementById("organizer-modal");
const modalContent = document.querySelector(".modal-content");

// Open and close modal
function openModal() {
    modal.classList.remove("hidden");
}

function closeModal() {
    modal.classList.add("hidden");
}

// Close modal when clicking outside the form
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Add Event
document.getElementById("event-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("event-name").value;
    const desc = document.getElementById("event-desc").value;
    const date = document.getElementById("event-date").value;
    const price = document.getElementById("event-price").value;
    const seats = document.getElementById("event-seats").value;
    const image = document.getElementById("event-image").files[0];

    const reader = new FileReader();
    reader.onload = function (event) {
        const newEvent = {
            name,
            desc,
            date,
            price,
            seats,
            remaining: seats,
            image: event.target.result
        };

        events.push(newEvent);
        displayEvents();
        closeModal();
    };

    reader.readAsDataURL(image);
});


// Display Events for Organizer
function displayEvents() {
    eventList.innerHTML = "";
    userEventList.innerHTML = "";

    events.forEach((event, index) => {
        const row = `
            <tr>
                <td>${event.name}</td>
                <td>${event.desc}</td>
                <td>${event.date}</td>
                <td>$${event.price}</td>
                <td>${event.seats}</td>
                <td>${event.remaining}</td>
                <td><img src="${event.image}" alt="Event" width="50"></td>
                <td><button onclick="deleteEvent(${index})">Delete</button></td>
            </tr>
        `;

        const userRow = `
            <tr>
                <td>${event.name}</td>
                <td>${event.desc}</td>
                <td>${event.date}</td>
                <td>$${event.price}</td>
                <td>${event.remaining}</td>
                <td><button onclick="bookTicket(${index})">Book</button></td>
            </tr>
        `;

        eventList.innerHTML += row;
        userEventList.innerHTML += userRow;
    });
}

// Delete Event
function deleteEvent(index) {
    events.splice(index, 1);
    displayEvents();
}

// Book Ticket
function bookTicket(index) {
    if (events[index].remaining > 0) {
        events[index].remaining--;
        displayEvents();
    } else {
        alert("No tickets remaining!");
    }
}
