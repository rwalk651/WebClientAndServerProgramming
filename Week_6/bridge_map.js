let bridges = [
    {
        name: "Verrazano-Narrows Bridge",
        citystate: "New York, NY",
        span: "1298.4",
        location: "40.6066, -74.0447"
    },
    {
        name: "Golden Gate Bridge",
        citystate: "San Francisco and Marin, CA",
        span: "1280.2",
        location: "37.8199, -122.4783"
    },
    {
        name: "Mackinac Bridge",
        citystate: "Mackinaw and St Ignace, MI"
        span: "1158.0"
        location: "45.8174, -84.7278"
    },

]
// fill in bridge data as objects nested in array - do the same with map chart
bridges.forEach( bridge => {
    let marker = L.marker(bridge.location).addTo(map)
})