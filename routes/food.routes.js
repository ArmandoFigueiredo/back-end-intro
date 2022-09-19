import express from "express";
import data from "../data.js";

let dataBase = data;

const foodRouter = express.Router();

//Create
foodRouter.post("/create-food", (req, res) => {
  const { body } = req;
  const newFood = {
    id: dataBase.length,
    ...body,
  };
  dataBase.push(newFood);

  return res.json(dataBase);
});

// Read
foodRouter.get("/", (req, res) => {
  return res.json(dataBase);
});

// Update
foodRouter.patch("/update-food", (req, res) => {
  const { body } = req;
  const prevFood = dataBase.find((food) => food.id === body.id);

  const id = body.id;
  const name = body.name || prevFood.name;
  const description = body.description || prevFood.description;
  const recipe = body.recipe || prevFood.recipe;

  const otherFoods = dataBase.filter((food) => food.id !== body.id);
  dataBase = [...otherFoods, { id, name, description, recipe }];
  return res.json(dataBase);
});

// Delete
foodRouter.delete("/delete-food", (req, res) => { 
  const { body } = req;
  const otherFoods = dataBase.filter((food) => food.id !== body.id);
  dataBase = otherFoods;
  return res.json(otherFoods);
});

export { foodRouter };