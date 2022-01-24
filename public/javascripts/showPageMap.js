mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    center: [-74.5, 40],
    zoom: 9,
    style: 'mapbox://styles/mapbox/streets-v11'
});
