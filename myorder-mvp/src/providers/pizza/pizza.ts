import { Injectable } from "@angular/core";


@Injectable()
export class PizzaProvider {

  constructor() { }

  public static getPizzas() {
    return [{
      name: "mussarela",
      src: "../../assets/imgs/pizzas/mussarela-t.png",
      ingredient: [{
        id: "cheese",
        src: "../../assets/imgs/cheese.svg",
        name: "Mussarela"
      },{
        id: "tomato",
        src: "../../assets/imgs/ingredientes/tomate.png",
        name: "Tomate",
      }]
    }, {
      name: "calabresa",
      src: "../../assets/imgs/pizzas/calabresa-c.png",
      ingredient: [{
        id: "calabresa",
        src: "../../assets/imgs/ingredientes/salami.svg",
        name: "Calabresa",
      },
      {
        id: "cebola",
        src: "../../assets/imgs/ingredientes/cebola.png",
        name: "Cebola",
      }]
    }];
  }

}
