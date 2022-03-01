let url = 'https://api.wheretheiss.at/v1/satellites/25544'

let issLat = document.querySelector('#iss_lat')
let issLong = document.querySelector('#iss_long')

let map = l.map('iss-map').setView([0, 0], 1);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


fetch(url).then( (res) => {
    return res.json()   // response data is sent to issData
}).then( (issData) => {
    console.log(issData)    // displays returned data in console
    let lat = issData.latitude
    let long = issData.longitude
    issLat.innerHTML = lat
    issLong.innerHTML = long
}).catch( (error) => {
    console.log('Error', error)
})