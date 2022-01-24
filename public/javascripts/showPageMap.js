mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map',
    center: camp, // ****
    zoom: 9,
    style: 'mapbox://styles/mapbox/streets-v11'
});
console.log(camp)
// default Marker, colored black, rotated 45 degrees. new mapboxgl.Marker({ color: 'red', rotation: 45 })

const marker1 = new mapboxgl.Marker()
    .setLngLat(camp) //  ****
    .addTo(map); 