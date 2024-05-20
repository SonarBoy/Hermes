import { Component, OnInit } from '@angular/core';
import { Hero } from "../Hero";
import { HEROES } from "../mock-heroes";



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {

  // hero: Hero = {
  //   id: 17,
  //   name: "Windstorm"
  // }

  hero = HEROES;
  selectedHero?: Hero;

  


  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

}
