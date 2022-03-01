let url = 'https://api.wheretheiss.at/v1/satellites/25544'

let issLat = document.querySelector('#iss_lat')
let issLong = document.querySelector('#iss_long')
let timeIssLocated = document.querySelector('#time')
let update = 10000
let issMarker

let map = L.map('iss-map').setView([0, 0], 1);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


iss()
setInterval(iss, update)

function iss() {
    fetch(url).then((res) => {
        return res.json()   // response data is sent to issData
    }).then((issData) => {
        console.log(issData)    // displays returned data in console
        let lat = issData.latitude
        let long = issData.longitude
        issLat.innerHTML = lat
        issLong.innerHTML = long

        if (!issMarker) {
            issMarker = L.marker([lat, long]).addTo(map)
        } else {
            issMarker.setLatLng([lat, long])
        }

        let now = Date()
        timeIssLocated.innerHTML = `This data was fetched at ${now}`

    }).catch((error) => {
        console.log('Error', error)
    })
}