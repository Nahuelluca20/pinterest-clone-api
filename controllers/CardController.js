class CardController {
  constructor(CardService) {
    this.cardService = CardService
  }

  async get(req, res) {
    const getCards = await this.cardService.get()

    if (getCards) {
      return res.json(getCards)
    } 
  }

  async getById(req, res) {
    const id = req.params.id;


    if(id) {
      const card = await this.cardService.getById(id)

      return res.json(card)
    } else {
      return res.sendStatus(400)
    }
  }

  async addComment(req, res) {
    const id = req.params.id;
    const body = req.body

    if(id && body.comments) {
      const card = await this.cardService.addComment(id, body.comments)

      return res.json(card)
    } else {
      return res.sendStatus(400)
    }
  }

  add(req, res) {
    const body = req.body

    if (body && body.img) {
      const addCard = this.cardService.add(body)

      if (addCard) {
        return res.sendStatus(201)
      } else {
        return res.sendStatus(500)
      }
    } else {
      return res.sendStatus(400)
    }
  }
}

module.exports = CardController