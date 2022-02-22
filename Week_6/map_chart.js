// Bridge chart script using bridge_map.js dataset. DOES NOT WORK W/O bridge_map.js


let canvas = document.querySelector('#bridge-chart')
let ctx = canvas.getContext('2d')

function getRandomColor() {     // https://stackoverflow.com/questions/1484506/random-color-generator
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let bridgeName = bridges.map( bridge => bridge.name)
let bridgeSpan = bridges.map( bridge => bridge.span)

mapChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: bridgeName,
        datasets: [{
            label: 'Span (meters)',
            data: bridgeSpan,
            backgroundColor: [`${getRandomColor()}`, `${getRandomColor()}`,
                `${getRandomColor()}`, `${getRandomColor()}`, `${getRandomColor()}`]
        }]
    },
})