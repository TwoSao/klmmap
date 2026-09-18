const map = L.map('map').setView([59.407, 24.695], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

omnivore.kml('map.kml')
    .addTo(map);