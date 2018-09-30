import { Injectable } from "@angular/core";

@Injectable()
export class AppsProvider {

  static UOL = {
    name: "Uol",
    src: "../../assets/imgs/apps/uol.svg",
    url: "https://www.uol.com.br/"
  };
  static GLOBO = {
    name: "Uol",
    src: "../../assets/imgs/apps/globo.png",
    url: "https://www.uol.com.br/"
  };
  static TERRA = {
    name: "Uol",
    src: "../../assets/imgs/apps/terra.svg",
    url: "https://www.uol.com.br/"
  };
  static NYT = {
    name: "Uol",
    src: "../../assets/imgs/apps/nyt.png",
    url: "https://www.uol.com.br/"
  };
  static GOOGLE = {
    name: "Uol",
    src: "../../assets/imgs/apps/google.svg",
    url: "https://www.uol.com.br/"
  };
  static FOLHA = {
    name: "Uol",
    src: "../../assets/imgs/apps/folha.png",
    url: "https://www.uol.com.br/"
  };
  static FRUIT_NINJA = {
    name: "Uol",
    src: "../../assets/imgs/apps/ninjafruit.png",
    url: "https://www.uol.com.br/"
  };
  static PLANT_ZOMBIE = {
    name: "Uol",
    src: "../../assets/imgs/apps/plantsvszombies.png",
    url: "https://www.uol.com.br/"
  };
  static CANDY_CRUSH = {
    name: "Uol",
    src: "../../assets/imgs/apps/candy_crush.png",
    url: "https://www.uol.com.br/"
  };
  static FACEBOOK = {
    name: "Uol",
    src: "../../assets/imgs/apps/facebook.svg",
    url: "https://www.uol.com.br/"
  };

  constructor() { }

  getApps(){
    return [
      AppsProvider.UOL,
      AppsProvider.GLOBO,
      AppsProvider.TERRA,
      AppsProvider.FOLHA,
      AppsProvider.GOOGLE,
      AppsProvider.FACEBOOK,
      AppsProvider.FRUIT_NINJA,
      AppsProvider.PLANT_ZOMBIE,
      AppsProvider.CANDY_CRUSH]
  }

}
