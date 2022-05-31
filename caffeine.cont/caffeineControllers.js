const caffeineModel = require("../models/caffeineModules");

module.exports = caffeineController = {
  newsList: (req, res) => {
    caffeineModel
      .find()
      .then((data) => {
        console.log(`Вот список всех напитков ${data}`);
        res.json();
      })
      .catch({ error: "Ошибка при выводе всех напитков" });
  },

  drinksAvailable: (req, res) => {
    caffeineModel
      .find({ availability: true })
      .then((data) => {
       
        res.json(data);
      })
      .catch({ error: "Ошибка при выводе напиток в наличии" });
  },

  informationAboutTheDrink: (req, res) => {
    caffeineModel
      .findById(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch({ error: "при выводе напитка" });
  },

  adding_a_drink: (req, res) => {
    caffeineModel
      .create({
        name: req.body.name,
        price: req.body.price,
        availability: req.body.availability,
        does_the_drink_contain_caffeine:
          req.body.does_the_drink_contain_caffeine,
        volume: req.body.volume,
        description_of_the_drink: req.body.description_of_the_drink,
      })
      .then((data) => {
        res.json('Напиток добавлен');
      })
      .catch({ error: "Ошибка при добавлении нового напитка" });
  },

  removingA_drink: (req, res) => {
    caffeineModel
      .findByIdAndRemove(req.params.id)
      .then(() => {
        res.json(`Напиток удален`);
      })
      .catch({ error: "Ошибка при удаление напитк" });
  },

  changingTheDrink: (req, res) => {
    caffeineModel
      .findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        price: req.body.price,
        availability: req.body.availability,
        does_the_drink_contain_caffeine:req.body.does_the_drink_contain_caffeine,
        volume: req.body.volume,
        description_of_the_drink: req.body.description_of_the_drink,
      }, {new: true})
      .then((data) => {
        
        res.json(data);
      })
      .catch({ error: "Ошибка при изменение напитка" });
  },
};
