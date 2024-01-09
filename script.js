// Simulated AJAX call to retrieve seat data from the server
function fetchSeatData() {
    return new Promise(resolve => {
        setTimeout(() => {
            // Simulated seat data for multiple movies
            const seatData = {
                movie1: [
                    { id: 1, status: 'available' },
                    { id: 2, status: 'available' },
                    { id: 3, status: 'available' },
                    { id: 4, status: 'available' },
                    { id: 5, status: 'available' },
                    { id: 6, status: 'available' },
                    { id: 7, status: 'available' },
                    { id: 8, status: 'available' },
                    { id: 9, status: 'available' },
                    { id: 10, status: 'available' },
                    { id: 11, status: 'available' },
                    { id: 12, status: 'available' },
                    { id: 13, status: 'available' },
                    { id: 14, status: 'available' },
                    { id: 15, status: 'available' },
                    { id: 16, status: 'available' },
                    { id: 17, status: 'available' },
                    { id: 18, status: 'available' },
                    { id: 19, status: 'available' },
                    { id: 20, status: 'available' },
                    { id: 21, status: 'available' },
                    { id: 22, status: 'available' },
                    { id: 23, status: 'available' },
                    { id: 24, status: 'available' },
                    { id: 25, status: 'available' },
                    { id: 26, status: 'available' },
                    { id: 27, status: 'available' },
                    { id: 28, status: 'available' },
                    { id: 29, status: 'available' },
                    { id: 30, status: 'available' },

                ],
                movie2: [
                    { id: 1, status: 'available' },
                    { id: 2, status: 'available' },
                    { id: 3, status: 'available' },
                    { id: 4, status: 'available' },
                    { id: 5, status: 'available' },
                    { id: 6, status: 'available' },
                    { id: 7, status: 'available' },
                    { id: 8, status: 'available' },
                    { id: 9, status: 'available' },
                    { id: 10, status: 'available' },
                    { id: 11, status: 'available' },
                    { id: 12, status: 'available' },
                    { id: 13, status: 'available' },
                    { id: 14, status: 'available' },
                    { id: 15, status: 'available' },
                    { id: 16, status: 'available' },
                    { id: 17, status: 'available' },
                    { id: 18, status: 'available' },
                    { id: 19, status: 'available' },
                    { id: 20, status: 'available' },
                    { id: 21, status: 'available' },
                    { id: 22, status: 'available' },
                    { id: 23, status: 'available' },
                    { id: 24, status: 'available' },
                    { id: 25, status: 'available' },
                    { id: 26, status: 'available' },
                    { id: 27, status: 'available' },
                    { id: 28, status: 'available' },
                    { id: 29, status: 'available' },
                    { id: 30, status: 'available' },

                ],
                movie3: [
                    { id: 1, status: 'available' },
                    { id: 2, status: 'available' },
                    { id: 3, status: 'available' },
                    { id: 4, status: 'available' },
                    { id: 5, status: 'available' },
                    { id: 6, status: 'available' },
                    { id: 7, status: 'available' },
                    { id: 8, status: 'available' },
                    { id: 9, status: 'available' },
                    { id: 10, status: 'available' },
                    { id: 11, status: 'available' },
                    { id: 12, status: 'available' },
                    { id: 13, status: 'available' },
                    { id: 14, status: 'available' },
                    { id: 15, status: 'available' },
                    { id: 16, status: 'available' },
                    { id: 17, status: 'available' },
                    { id: 18, status: 'available' },
                    { id: 19, status: 'available' },
                    { id: 20, status: 'available' },
                    { id: 21, status: 'available' },
                    { id: 22, status: 'available' },
                    { id: 23, status: 'available' },
                    { id: 24, status: 'available' },
                    { id: 25, status: 'available' },
                    { id: 26, status: 'available' },
                    { id: 27, status: 'available' },
                    { id: 28, status: 'available' },
                    { id: 29, status: 'available' },
                    { id: 30, status: 'available' },

                ],
            };
            resolve(seatData);
        }, 500);
    });
}

let currentMovie = 'movie1';

// Function to generate seat map dynamically
async function generateSeatMap() {
    const seatMapContainer = document.getElementById('seatMapContainer');
    const legendContainer = document.getElementById('legend');

    // Fetch seat data for the selected movie
    const seatData = await fetchSeatData();  // Wait for seat data to be fetched

    seatData[currentMovie].forEach(seat => {
        const seatElement = document.createElement('div');
        seatElement.className = `seat ${seat.status}`;
        seatElement.setAttribute('data-seat-id', seat.id);
        seatElement.addEventListener('click', () => toggleSeat(seat.id));
        seatMapContainer.appendChild(seatElement);
    });

    // Generate legend
    const seatStates = Array.from(new Set(seatData[currentMovie].map(seat => seat.status)));
    seatStates.forEach(state => {
        const legendItem = document.createElement('div');
        legendItem.className = 'legend-item';
        legendItem.innerHTML = `<div class="legend-color ${state.toLowerCase()}"></div>${state}`;
        legendContainer.appendChild(legendItem);
    });
}

// Function to update the seat map when the movie is changed
async function changeMovie() {
    const movieSelect = document.getElementById('movieSelect');
    currentMovie = movieSelect.value;

    // Clear the seat map and legend
    const seatMapContainer = document.getElementById('seatMapContainer');
    const legendContainer = document.getElementById('legend');
    seatMapContainer.innerHTML = '';
    legendContainer.innerHTML = ''; // Clear the legend container

    // Generate the seat map for the selected movie
    await generateSeatMap();  // Wait for the seat map to be generated
}

// Function to toggle seat status
function toggleSeat(seatId) {
    const seatElement = document.querySelector(`.seat[data-seat-id="${seatId}"]`);
    if (seatElement && !seatElement.classList.contains('booked')) {
        seatElement.classList.toggle('selected');
        updateSelectedSeats();
    }
}

// Function to update the list of selected seats
function updateSelectedSeats() {
    const selectedSeatsContainer = document.getElementById('selectedSeats');
    const selectedSeats = document.querySelectorAll('.seat.selected');

    const selectedSeatsArray = Array.from(selectedSeats).map(seat => {
        return `Seat ${seat.getAttribute('data-seat-id')}`;
    });

    selectedSeatsContainer.textContent = `Selected Seats: ${selectedSeatsArray.join(', ')}`;
}

// Function to book selected seats (you can customize this part)
function bookSelectedSeats() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    selectedSeats.forEach(seat => {
        seat.classList.remove('selected');
        seat.classList.add('booked');
    });

    alert('Seats booked successfully!');
}

// Generate seat map on page load
generateSeatMap();
