import { Injectable } from "@angular/core";
import { IngredientProvider } from "../ingredient/ingredient";


@Injectable()
export class PizzaProvider {

  constructor() { }

  public static getPizzas() {
    return [{
      name: "Mussarela",
      src: "../../assets/imgs/pizzas/mussarela-t.png",
      ingredient: [IngredientProvider.MUSSARELA, IngredientProvider.calabresa]
    }, {
      name: "Calabresa",
      src: "../../assets/imgs/pizzas/calabresa-c.png",
      ingredient: [IngredientProvider.calabresa, IngredientProvider.cebola, IngredientProvider.MUSSARELA]
  }];
}

}
