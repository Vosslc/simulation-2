
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
      const {name, address, city, st, zipcode, image, mortgage, rent} = req.body
      db.add_house({
        name: name,
        address: address,
        city: city,
        state: st,
        zip: zipcode,
        img: image,
        mortgage: mortgage,
        rent: rent
      })
      .then(result => {
        res.status(200).send(result)
      })
      .catch(err => {
        console.log(err)
      })
    },

    deleteHouse(req, res){
      const db = req.app.get('db')
      const {id} = req.params
      db.delete_house(id)
        .then(result => {
          res.status(200).send(result)
        })
        .catch(err => {
          console.log(err)
        })
      }

}