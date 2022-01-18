module.exports = func => {
    return (req, res, next) => {
        func(req, res, next).catch(next);
    }
}

//func prosledjujemo
//vraca novu funkciju koja izvrsava func i catch error