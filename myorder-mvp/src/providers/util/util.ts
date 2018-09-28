import { Injectable } from "@angular/core";
import { Toast, ToastController } from "ionic-angular";

@Injectable()
export class UtilProvider {

  public static BOTTOM:string = "bottom";
  public static MIDDLE:string = "middle";
  public static TOP = "topm";

  public toast: Toast

  constructor(public toastCrtl: ToastController) {}

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
