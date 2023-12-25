type KeyType = "all" | "dog" | "cat" | "fish" | false;

export const getMenu = (key: KeyType) => {
  let menu = {
    all: false,
    dog: false,
    cat: false,
    fish: false,
  };

  if (!key) return menu;

  menu[key] = true;

  return menu;
};
