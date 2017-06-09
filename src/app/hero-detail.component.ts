import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { SharedService } from './sharedService';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private heroService: HeroService, private location: Location,
    private route: ActivatedRoute, private sharedService: SharedService) {
  }

  ngOnInit(): void {
   if (this.sharedService.currentItem != null) {
    this.hero = this.sharedService.currentItem;
   }
    // tslint:disable-next-line:one-line
    else {this.hero = {id: -1, name: ''}; }
  }

  save(): void {
    this.sharedService.storeEvent.emit(this.hero);
  }

  delete(): void {
    this.sharedService.deleteEvent.emit(this.hero);
  }

  goBack(savedHero: Hero = null): void {
   this.location.back();
  }
}
