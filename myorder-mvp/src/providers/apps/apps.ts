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
    url: "https://www.uol.com.br/"
  };
  static PLANT_ZOMBIE = {
    name: "Plants vs Zombies",
    src: "../../assets/imgs/apps/plantsvszombies.png",
    url: "https://www.uol.com.br/"
  };
  static BIG_FARM = {
    name: "Big Farm",
    src: "../../assets/imgs/apps/big-farm.png",
    url: "https://www.mmobomb.com/link/big-farm"
    };
    static FACEBOOK = {
    name: "Facebook",
    src: "../../assets/imgs/apps/facebook.svg",
    url: "https://pt-br.facebook.com/login/"
    };

  constructor() { }

  getApps(){
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
      AppsProvider.BIG_FARM]
  }

}
