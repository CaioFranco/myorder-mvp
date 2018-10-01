import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { ScreenOrientation } from "@ionic-native/screen-orientation";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage:any = "HomePage";

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, screen:ScreenOrientation) {
    platform.ready().then((data) => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      console.log("MyApp",data);
      
      statusBar.styleDefault();
      screen.lock(screen.ORIENTATIONS.LANDSCAPE).then(() => {
        splashScreen.hide();
      }).catch((error) => {
        splashScreen.hide();
        console.error("screen.lock",error);
      });
    });
  }
}

