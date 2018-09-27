import { Injectable } from '@angular/core';


@Injectable()
export class PizzaProvider {

  constructor() { }

  public static getPizzas() {
    return [{
      name: "mussarela",
      src: "../../assets/imgs/Pizza.jpg",
      ingredient: [{
        id: "cheese",
        src: "../../assets/imgs/cheese.svg",
        name: "Mussarela"
      },{
        id: "calabresa",
        src: "../../assets/imgs/salami.svg",
        name: "Calabresa",
      }]
    },{
      name: "mussarela",
      src: "../../assets/imgs/Pizza.jpg",
      ingredient: [{
        id: "cheese",
        src: "../../assets/imgs/cheese.svg",
        name: "Mussarela"
      },{
        id: "calabresa",
        src: "../../assets/imgs/salami.svg",
        name: "Calabresa",
      }]
    },{
      name: "mussarela",
      src: "../../assets/imgs/Pizza.jpg",
      ingredient: [{
        id: "cheese",
        src: "../../assets/imgs/cheese.svg",
        name: "Mussarela"
      },{
        id: "calabresa",
        src: "../../assets/imgs/salami.svg",
        name: "Calabresa",
      }]
    }];
  }

}
