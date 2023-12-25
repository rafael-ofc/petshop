import { Pet } from "../models/Pet";
import { getMenu } from "../services/getMenu";
import { ControllerType } from "../types";

export const search: ControllerType = (req, res) => {
  let { q } = req.query;
  let menu = getMenu(false);
  let list = q ? Pet.search(q as string) : [];

  res.render("pages/page", {
    menu,
    list,
    q,
  });
};
