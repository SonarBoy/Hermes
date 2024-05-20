import { Injectable } from '@angular/core';
import { Hero } from './Hero';
//import * as io from 'socket.io-client';
//import * as io from 'socket.io-client';
import { io } from "socket.io-client";
//import { io, Socket } from 'socket.io-client';
//import { io } from "../../node_modules/socket.io-client";
//import { io } from 'socket.io-client/build/cjs/index';

import { HEROES } from './mock-heroes'; 
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  //private socket = io('http://localhost:3000/SocketIOChat');


  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }

  sendMessage(message: string){
    //this.socket.emit('chat message', message);
  }

  getNewMessage = () => {
    // this.socket.on('chat message', (message) => {
    //   this.message$.next(message);
    // });

    // return this.message$.asObservable();
  };

}
