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
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${camp.title}</h3>`  // ovo je undefined jer treba popraviti camp u show.ejs
            )
    )
    .addTo(map); 