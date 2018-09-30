import { Injectable } from '@angular/core';

@Injectable()
export class IngredientProvider {

  static MUSSARELA = {
    id: "cheese",
    src: "../../assets/imgs/ingredientes/cheese.svg",
    name: "Mussarela",
    time: 120
  }

  static calabresa = {
    id: "calabresa",
    src: "../../assets/imgs/ingredientes/salami.svg",
    name: "Calabresa",
    time: 90
  }

  static cebola = {
    id: "cebola",
    src: "../../assets/imgs/ingredientes/cebola.png",
    name: "Cebola",
    time: 30
  }

  static tomato = {
    id: "tomato",
    src: "../../assets/imgs/ingredientes/tomate.png",
    name: "Tomate",
    time: 15
  }

  static catupiry = {
    id: "catupiry",
    src: "../../assets/imgs/ingredientes/catupiry.png",
    name: "Catupiry",
    time: 5
  }

  constructor() {
  }

  public static getIngredients() {
    return [this.MUSSARELA, this.calabresa, this.cebola, this.tomato, this.catupiry];

  }
}
