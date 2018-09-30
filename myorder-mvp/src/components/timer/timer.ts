import { ITimer } from "./../../components/timer/itimer";
import { Component, Input } from "@angular/core";
import { UtilProvider } from "../../providers/util/util";

@Component({
  selector: "timer",
  templateUrl: "timer.html"
})
export class TimerComponent {

  @Input() timeInSeconds: number;
  public timer: ITimer;
  public continue:boolean;
  teste: number;

  constructor(public util:UtilProvider) {
  }

  ngOnInit() {
    this.initTimer();
  }

  hasFinished() {
    return this.timer.hasFinished;
  }

  initTimer() {
    if (!this.timeInSeconds) { 
      this.timeInSeconds = 0; 
    } else {
    }

    this.timer = <ITimer>{
      seconds: this.timeInSeconds,
      runTimer: false,
      hasStarted: false,
      hasFinished: false,
      secondsRemaining: this.timeInSeconds
    };

    this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
  }

  startTimer(time?) {
    this.timer.hasStarted = true;
    this.timer.runTimer = true;
    if (time !== 0) {
      this.timer.secondsRemaining = this.util.getCurrentTime() + time;
    }
    this.timerTick();
  }

  pauseTimer() {
    this.timer.runTimer = false;
  }

  resumeTimer() {
    this.startTimer();
  }

  timerTick() {
    setTimeout(() => {
      if (!this.timer.runTimer) { return; }
      this.timer.secondsRemaining--;
      this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
      // console.log("TEMPO:",this.timer.displayTime );
      this.util.currentTime = this.timer.secondsRemaining;
      if (this.timer.secondsRemaining > 0) {
        this.timerTick();
      }
      else {
        this.timer.hasFinished = true;
      }
    }, 1000);
  }

  saveCurrentTime(){
    this.timer.hasStarted = true;
    this.timer.runTimer = true;
    this.continue = true;
    this.timer.secondsRemaining = this.getCurrentTime();
    this.timerTick();
  }

  getCurrentTime(){
    return this.timer.secondsRemaining == null ? 0 : this.timer.secondsRemaining;
  }

  getSecondsAsDigitalClock(inputSeconds: number) {
    var sec_num = parseInt(inputSeconds.toString(), 10); // don"t forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    var hoursString = "";
    var minutesString = "";
    var secondsString = "";
    hoursString = (hours < 10) ? "0" + hours : hours.toString();
    minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
    secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
    return hoursString + ":" + minutesString + ":" + secondsString;
  }
}
