const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use(require("./caffeine.rout/caffeineRouter"));

mongoose.connect("mongodb+srv://AgReSSoR:Magomed95@cluster0.rdhjd.mongodb.net/coffeeHouse?retryWrites=true&w=majority")


  .then( () => console.log("Успешное соединениились с сервером MongoDB"))
  .catch( () => console.log("Ошибка с соединение с сервером MongoDB"));


app.listen(5000, () => {
  console.log(`Сервер запушен успешно http://localhost:${5000}`);
});
