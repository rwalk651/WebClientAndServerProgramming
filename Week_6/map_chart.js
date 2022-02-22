// Chart script using bridge_map.js dataset.
// Does NOT work W/O bridge_map.js OR worldwide_bridge_map.js


let canvas = document.querySelector('#bridge-chart')
let ctx = canvas.getContext('2d')   // creating 2d canvas for chart

// mapping bridge name and span into an array
let bridgeName = bridges.map( bridge => bridge.name)
let bridgeSpan = bridges.map( bridge => bridge.span)

function getRandomColor() {     // random color generator for bar chart
    // found here: https://stackoverflow.com/questions/1484506/random-color-generator
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// creates bar chart using chart.js
mapChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: bridgeName,
        datasets: [{
            label: 'Span(meters)',
            data: bridgeSpan,
            // repeats background color if data exceeds the 5 functions
            backgroundColor: [`${getRandomColor()}`, `${getRandomColor()}`,
                `${getRandomColor()}`, `${getRandomColor()}`, `${getRandomColor()}`]
        }]
    },
})