import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID} from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PrintTasksComponent } from './print-tasks/print-tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { PlDatePipe } from './pl-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PrintTasksComponent,
    AddTaskComponent,
    PlDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pl'}],
  bootstrap: [AppComponent]
})


export class AppModule { }
