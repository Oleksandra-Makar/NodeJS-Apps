const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=0a15b290210892a20bb9a08406b9910c&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) =>{
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`)
//     }
// })

const geo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoib2xla3NhbmRyYW1ha2FyIiwiYSI6ImNrbDVpYnRlODBvbGUybnA2aWE5NnV1ZDcifQ.XpLEGQrU9XwwCVWKqMzxPA&limit=1'
request({ url: geo, json: true }, (error, response) =>{
    if (error) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]

        console.log(`Latitude is: ${latitude}. Longitude is: ${longitude}`)
    }
})