// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 16);

// Add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var userMarker, userCircle;

// Function to handle location found
function onLocationFound(e) {
    // console.log(e);

    var radius = e.accuracy / 2;

    if (userMarker) {
        map.removeLayer(userMarker);
        map.removeLayer(userCircle);
    }

    userMarker = L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    userCircle = L.circle(e.latlng, radius).addTo(map);

    map.setView(e.latlng, map.getZoom());
}

// Function to handle location error
function onLocationError(e) {
    alert(e.message);
}

// Request user's location and track their movement
map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

map.locate({setView: true, maxZoom: 20, watch: true});

// Function for search coordinate
let searchBar = document.querySelector("#search-input");
let searchBtn = document.querySelector("#search-btn");

// searchBtn.addEventListener('click', cordinate);

function cordinate(event) {
    // event.preventDefault();
    console.log(searchBar.value);
    // Add code here to use the input value for searching coordinates
}
