module.exports = {

  getAllHouses(req, res){
    const db = req.app.get('db')
    db.all_houses()
      .then(result => {
        res.status(200).send(result)
      })
      .catch(err => {
        console.log(err)
      })
    },
    addHouse(req, res) {
      const db = req.app.get('db')
      const {name, address, city, state, zip, img, mortgage, rent} = req.body
      db.add_house({
        name: name,
        address: address,
        city: city,
        state: state,
        zip: zip,
        img: img,
        mortgage: mortgage,
        rent: rent
      })
      .then(result => {
        res.status(200).send(result)
      })
      .catch(err => {
        console.log(err)
      })
    }
}