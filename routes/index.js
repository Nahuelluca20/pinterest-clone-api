const express = require('express');
const router = express.Router();

const CardController = require("../controllers/CardController")
const CardService = require("../services/CardServices")
const CardInstance = new CardController(new CardService())

router.get('/ping', (req, res, next) => {
  return res.send("PONG");
});

router.get("/api/card/:id", (req, res) => {
  return CardInstance.getById(req, res)
})

router.patch("/api/card/:id", (req, res) => {
  return CardInstance.addComment(req, res)
})

router.get("/api/card", (req, res) => {
  return CardInstance.get(req, res)
})


router.post("/api/card", (req, res) => {
  return CardInstance.add(req, res)
})

module.exports = router;