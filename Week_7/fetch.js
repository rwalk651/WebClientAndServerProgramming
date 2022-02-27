let url = 'https://api.wheretheiss.at/v1/satellites/25544'

let issLat = document.querySelector('#iss_lat')
let issLong = document.querySelector('#iss_long')

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