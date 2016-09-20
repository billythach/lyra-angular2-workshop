import { Component, OnInit } from '@angular/core';

import { Hero } from './hero.model';

@Component({
    moduleId : module.id,
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];

    constructor() { }

    ngOnInit() {
        this.heroes = [
            { id: 11, name: 'Tyrion Lannister' },
            { id: 12, name: 'Jon Snow' },
            { id: 13, name: 'Daenerys Targaryen' },
            { id: 14, name: 'Cersei Lannister' },
            { id: 15, name: 'Sansa Stark' },
            { id: 16, name: 'Arya Stark' },
            { id: 17, name: 'Arya Stark' },
            { id: 18, name: 'Jaime Lannister' },
            { id: 19, name: 'Theon Greyjoy' },
            { id: 20, name: 'Varys' }
        ]
    }
}