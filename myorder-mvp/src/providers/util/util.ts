import { Injectable } from "@angular/core";
import { Toast, ToastController } from "ionic-angular";
import { empty } from "rxjs";

@Injectable()
export class UtilProvider {

  public static BOTTOM: string = "bottom";
  public static MIDDLE: string = "middle";
  public static TOP = "topm";

  public currentTime:number;

  public toast: Toast

  constructor(public toastCrtl: ToastController) { }

  public showToast(msg, posicao?) {
    try {
      posicao = posicao == null ? UtilProvider.MIDDLE : posicao;
      this.toast.dismiss();
    } catch (error) {
      console.error(error);
    }

    this.toast = this.toastCrtl.create({
      message: msg,
      duration: 3000,
      position: posicao
    });

    this.toast.present();
  }

  public getCurrentTime(){
    return this.empty(this.currentTime) ? 0 : this.currentTime;
  }

  /* Função para verificar se o elemento está vázio */
  empty(value) {
    var undef, key, i, len, emptyValues = [undef, null, false, 0, "", "0"];
    for (i = 0, len = emptyValues.length; i < len; i++) {
      if (value === emptyValues[i]) {
        return true;
      }
    }
    if (typeof value === "object") {
      for (key in value) {
        if (value.hasOwnProperty(key)) { return false }
      }
      return true;
    }
    return false;
  }


  public hasClass(el: Element, name: string): any {
    return new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)").test(el.className);
  }

  public addClass(el: Element, name: string): void {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(" ") : name;
    }
  }

  public removeClass(el: Element, name: string): void {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)", "g"), "");
    }
  }

}
