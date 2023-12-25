import { Pet } from "../models/Pet";
import { getMenu } from "../services/getMenu";
import { ControllerType } from "../types";

export const home: ControllerType = (req, res) => {
  let menu = getMenu("all");
  let list = Pet.getAll();

  res.render("pages/page", {
    menu,
    banner: {
      title: "Todos os animais",
      image: "allanimals.jpg",
    },
    list,
  });
};

export const dogs: ControllerType = (req, res) => {
  let menu = getMenu("dog");
  let list = Pet.get("dog");

  res.render("pages/page", {
    menu,
    banner: {
      title: "Todos os cachorros",
      image: "banner_dog.jpg",
    },
    list,
  });
};

export const cats: ControllerType = (req, res) => {
  let menu = getMenu("cat");
  let list = Pet.get("cat");

  res.render("pages/page", {
    menu,
    banner: {
      title: "Todos os gatos",
      image: "banner_cat.jpg",
    },
    list,
  });
};

export const fishes: ControllerType = (req, res) => {
  let menu = getMenu("fish");
  let list = Pet.get("fish");

  res.render("pages/page", {
    menu,
    banner: {
      title: "Todos os peixes",
      image: "banner_fish.jpg",
    },
    list,
  });
};
