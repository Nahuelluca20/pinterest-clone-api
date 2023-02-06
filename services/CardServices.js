const Card = require("../models/Card")

class CardService {

  get() {
    const query = Card.find({}).exec()

    return query
  }

  getById(id) {
    const query = Card.findOne({ _id: id }).exec()

    return query
  }

  add(data) {
    const addCard = new Card({
      img: data.img,
      link: data.link,
      title: data.title,
      userName: data.userName,
      userImg: data.userImg,
    })

    return addCard.save()
  }
}

module.exports = CardService;
