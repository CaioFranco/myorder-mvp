import { Injectable } from '@angular/core';

@Injectable()
export class IngredientProvider {

  constructor() {
  }

  public static getIngredients(){
    return [{
      id: "cheese",
      src: "../../assets/imgs/cheese.svg",
      name: "Mussarela"
    }, {
      id: "calabresa",
      src: "../../assets/imgs/salami.svg",
      name: "Calabresa",
    }, {
      id: "mushroom",
      src: "../../assets/imgs/mushroom.svg",
      name: "Cogumelo",
    }];
  }
}
