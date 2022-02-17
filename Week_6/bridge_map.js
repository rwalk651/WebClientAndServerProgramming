let bridges = [
    {
        // fill in bridge data as objects nested in array
    }
]

bridges.forEach( bridge => {
    let marker = L.marker(bridge.location).addTo(map)
})