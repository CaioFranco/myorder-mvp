import { Injectable } from "@angular/core";

@Injectable()
export class Order implements OrderImpl{

    public name;
    public pizzas;
    public drinks;
    public time;
    public desserts;

    constructor(name){
        this.name = name;
        this.pizzas = [];
        this.drinks = [];
        this.time = 0;
        this.desserts = [];
    }

}

export interface OrderImpl {

    name: string;
    pizzas: any[];
    drinks: any[];
    time: number;
    desserts: any[];
}