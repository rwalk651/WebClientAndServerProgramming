let bridges = [
    {
        // fill in bridge data as objects nested in array - do the same with map chart
    }
]

bridges.forEach( bridge => {
    let marker = L.marker(bridge.location).addTo(map)
})