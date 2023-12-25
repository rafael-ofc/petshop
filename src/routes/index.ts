import { Router } from "express";
import * as PageController from "../controllers/page";
import * as SearchController from "../controllers/search";

const route = Router();

route.get("/", PageController.home);
route.get("/dogs", PageController.dogs);
route.get("/cats", PageController.cats);
route.get("/fishes", PageController.fishes);
route.get("/search", SearchController.search);

export default route;
