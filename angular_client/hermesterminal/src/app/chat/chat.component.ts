import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../Hero';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  message: string;
  messages: string[] = [];


  constructor() { }


  //(message: string) => { this.messages.push(message); }

  ngOnInit() {
    //this.heroService.getMessages().subscribe();
  }

}
