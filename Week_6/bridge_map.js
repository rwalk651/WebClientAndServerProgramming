// Bridge maps with data as objects nested in an array


let usCenterCoordinates = [39.67, -96.54]
let zoomLevel = 3.7

let map = L.map('bridge-map').setView(usCenterCoordinates, zoomLevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


let bridges = [
    {
        name: 'Verrazano-Narrows Bridge',
        citystate: "New York, NY",
        span: 1298.4,
        location: [40.6066, -74.0447]
    },
    {
        name: 'Golden Gate Bridge',
        citystate: "San Francisco and Marin, CA",
        span: 1280.2,
        location: [37.8199, -122.4783]
    },
    {
        name: 'Mackinac Bridge',
        citystate: "Mackinaw and St Ignace, MI",
        span: 1158,
        location: [45.8174, -84.7278]
    },
    {
        name: 'George Washington Bridge',
        citystate: "New York, NY and New Jersey, NJ",
        span: 1067,
        location: [40.8517, -73.9527]
    },
    {
        name: 'Tacoma Narrows Bridge',
        citystate: "Tacoma and Kitsap, WA",
        span: 853.44,
        location: [47.2690, -122.5517]
    }
]

bridges.forEach( bridge => {
    let marker = L.marker(bridge.location)
        .bindPopup(`${bridge.name}` + '<br>' + `${bridge.citystate}` + '<br>' + `${bridge.span} meters`)
        .addTo(map);
})