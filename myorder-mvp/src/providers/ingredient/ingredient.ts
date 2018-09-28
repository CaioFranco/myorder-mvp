import { Injectable } from '@angular/core';

@Injectable()
export class IngredientProvider {

  constructor() {
  }

  public static getIngredients(){
    return [{
      id: "cheese",
      src: "../../assets/imgs/ingredientes/cheese.svg",
      name: "Mussarela"
    }, {
      id: "calabresa",
      src: "../../assets/imgs/ingredientes/salami.svg",
      name: "Calabresa",
    },
    {
      id: "cebola",
      src: "../../assets/imgs/ingredientes/cebola.png",
      name: "Cebola",
    },
     {
      id: "tomato",
      src: "../../assets/imgs/ingredientes/tomate.png",
      name: "Tomate",
    },
    {
      id: "catupiry",
      src: "../../assets/imgs/ingredientes/catupiry.png",
      name: "Catupiry",
    }
   ];
    
  }
}
