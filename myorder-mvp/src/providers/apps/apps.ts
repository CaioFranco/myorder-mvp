import { Injectable } from "@angular/core";

@Injectable()
export class AppsProvider {

  static UOL = {
    name: "Uol",
    src: "../../assets/imgs/apps/uol.svg",
    url: "https://www.uol.com.br/"
  };
  static GLOBO = {
    name: "Globo",
    src: "../../assets/imgs/apps/globo.png",
    url: "https://www.globo.com/"
  };
  static TERRA = {
    name: "Terra",
    src: "../../assets/imgs/apps/terra.svg",
    url: "https://www.terra.com.br/"
  };
  static NYT = {
    name: "New York Times",
    src: "../../assets/imgs/apps/nyt.png",
    url: "https://www.nytimes.com/"
  };
  static GOOGLE = {
    name: "Google",
    src: "../../assets/imgs/apps/google.svg",
    url: "https://www.google.com.br/"
  };
  static FOLHA = {
    name: "Folha de SP",
    src: "../../assets/imgs/apps/folha.png",
    url: "https://www.folha.uol.com.br/"
  };
  static FRUIT_NINJA = {
    name: "Fruit Ninja",
    src: "../../assets/imgs/apps/ninjafruit.png",
    url: ""
  };
  static PLANT_ZOMBIE = {
    name: "Plants vs Zombies",
    src: "../../assets/imgs/apps/plantsvszombies.png",
    url: ""
  };
  static BIG_FARM = {
    name: "Big Farm",
    src: "../../assets/imgs/apps/big-farm.png",
    url: ""
  };
  static FACEBOOK = {
    name: "Facebook",
    src: "../../assets/imgs/apps/facebook.svg",
    url: "https://pt-br.facebook.com/login/"
  };
  static CANDY_CRUSH = {
    name: "Candy Crush",
    src: "../../assets/imgs/apps/candy_crush.png",
    url: ""
  };
  static INSTAGRAM = {
    name: "Instagram",
    src: "../../assets/imgs/apps/instagram.png",
    url: "https://www.instagram.com/?hl=pt-br"
  };
  static TWITTER = {
    name: "Twitter",
    src: "../../assets/imgs/apps/twitter.svg",
    url: "https://twitter.com/?lang=pt-br"
  };
  static NINEGAG = {
    name: "9gag",
    src: "../../assets/imgs/apps/9gag.svg",
    url: "https://9gag.com/"
  };

  constructor() { }

  getApps() {
    return [
      AppsProvider.UOL,
      AppsProvider.GLOBO,
      AppsProvider.TERRA,
      AppsProvider.FOLHA,
      AppsProvider.NYT,
      AppsProvider.GOOGLE,
      AppsProvider.FACEBOOK,
      AppsProvider.FRUIT_NINJA,
      AppsProvider.PLANT_ZOMBIE,
      AppsProvider.BIG_FARM,
      AppsProvider.CANDY_CRUSH,
      AppsProvider.TWITTER,
      AppsProvider.INSTAGRAM,
      AppsProvider.NINEGAG,
    ]
  }

}
