const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers')
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp-2022', {
    useNewUrlParser: true,
    // useCreateIndexes: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)]

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 5; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '61e942e53a636c00123b348f',//USER ID
            location: `${cities[random1000].city}, ${cities[random1000].state}`, //lokacija
            title: `${sample(descriptors)} ${sample(places)} `, // random ime kampa
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consectetur vero unde perspiciatis ipsum natus possimus, consequatur id necessitatibus omnis reprehenderit rerum aliquid nesciunt deserunt consequuntur error soluta officia? Et!',
            price,
            geometry: {
                type: "Point",
                coordinates: [19.26611, 42.43972]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/duumzqdiz/image/upload/v1643024484/YelpCamp/litrgxvsupehgy0debcd.jpg',
                    filename: 'YelpCamp/wztldvrlpzfqplbv5pog',
                },
                {
                    url: 'https://res.cloudinary.com/duumzqdiz/image/upload/v1643024484/YelpCamp/zynyibpglsm89hjv0izv.jpg',
                    filename: 'YelpCamp/khe0qjop4ss1nkeu6b2p',
                }
            ]

        })
        await camp.save();
    }
}

seedDB().then(() => { // za nove podatke: node seeds/index.js  
    db.close()
})