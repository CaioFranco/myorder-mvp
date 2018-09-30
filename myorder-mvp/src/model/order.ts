import { Injectable } from "@angular/core";

@Injectable()
export class Order implements OrderImpl{

    public name;
    public itens;
    public drinks;
    public time;

    constructor(name){
        this.name = name;
        this.itens = [];
        this.drinks = [];
        this.time = 0;
    }

}

export interface OrderImpl {

    name: string;
    itens: any[];
    drinks: any[];
    time: number;
}