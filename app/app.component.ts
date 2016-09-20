import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
    selector: 'my-app',
    template: `<h1>Lyra Workshop : Angular 2</h1>
    <my-heroes></my-heroes>
    `
  })
export class AppComponent { }
