import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { SharedService } from './sharedService';

@Component({
  selector: 'my-client',
  template: '<my-heroes [heroes]="heroes"></my-heroes>'
})
export class HeroesClientComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  addingHero = false;
  error: any;
  showNgFor = false;

  constructor(
    private router: Router,
    private heroService: HeroService, private sharedService: SharedService) {
        sharedService.deleteEvent.subscribe((data: Hero) => {
               // Issue: when i press button delete... this is called multiple times
               // tslint:disable-next-line:no-console
               console.info('deleting..');
        } );

         sharedService.storeEvent.subscribe((data: Hero) => {
                // Issue: when i press button save... this is called multiple times
               // tslint:disable-next-line:no-console
               console.info('storing.. insert or update..');
        } );
    }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .then(heroes => this.heroes = heroes)
      .catch(error => this.error = error);
  }



  deleteHero(hero: Hero, event: any): void {
    // tslint:disable-next-line:no-console
    console.info('deleting..');
  }

 save(hero: Hero, event: any): void {
    // tslint:disable-next-line:no-console
    console.info('saving..');
  }


  ngOnInit(): void {
    this.getHeroes();
  }



}

