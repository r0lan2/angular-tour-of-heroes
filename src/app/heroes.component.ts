import { Component, DoCheck, EventEmitter, Input, OnInit, IterableDiffers, OnChanges, Output, SimpleChange  } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { SharedService } from './sharedService';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  @Input() heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router, private sharedService: SharedService) { }

  ngOnInit(): void {

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.gotoDetail();
  }

  gotoDetail(): void {
    this.sharedService.currentItem = this.selectedHero;
    this.router.navigate(['/detail']);
  }
}
