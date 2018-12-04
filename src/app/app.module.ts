import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './start/app.component';
import { NavComponent } from './shared/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        BrowserModule,
        AdminModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NavComponent,
        // HomeComponent,
        // ErrorComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
