const {Router} = require("express")

const router = Router() 

const caffeineController = require("../caffeine.cont/caffeineControllers")

router.get('/drinks', caffeineController.newsList)

router.get('/drinks/in-stock', caffeineController.drinksAvailable)

router.get('/drinks/:id', caffeineController.informationAboutTheDrink)

router.post('/drinks', caffeineController.adding_a_drink)

router.delete('/drinks/:id', caffeineController.removingA_drink)

router.patch('/drinks/:id', caffeineController.changingTheDrink)

module.exports = router