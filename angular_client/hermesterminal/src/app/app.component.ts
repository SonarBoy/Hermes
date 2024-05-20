import { Component } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newMessage: string;
  messageList: string[] = [];

  title = 'Hermes Terminal with Heroes';

  constructor(private heroService: HeroService){

  }

  ngOnInit(){
      // this.heroService.getNewMessage().subscribe((message: string) => {
      //   this.messageList.push(message);
      // });
  }

  sendMessage(){
    // this.heroService.sendMessage(this.newMessage);
    // this.newMessage = '';
  }
}
