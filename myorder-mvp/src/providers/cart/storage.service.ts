import { STORAGE_KEYS } from "../../config/storage_keys.config";
import { Cart } from "./cart";
import { Injectable } from "../../../node_modules/@angular/core";

@Injectable()
export class StorageService {


    getCart() : Cart {
        let str = localStorage.getItem(STORAGE_KEYS.cart);
        if (str != null) {
            return JSON.parse(str);
        }
        else {
            return null;
        }
    }
    
    setCart(obj : Cart) {
        if (obj != null) {
            localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(obj));
        } 
        else {
            localStorage.removeItem(STORAGE_KEYS.cart);
        }
    }
}