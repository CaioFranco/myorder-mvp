import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { TimerComponent } from "./timer/timer";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/compiler/src/core";
import { CommonModule } from "@angular/common";
@NgModule({
	declarations: [TimerComponent],
	imports: [CommonModule],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA,
		NO_ERRORS_SCHEMA
	],
	exports: [TimerComponent]
})
export class ComponentsModule { }
