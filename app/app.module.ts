import { NgModule }      from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './heroes/hero.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, HeroesComponent, HeroComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
