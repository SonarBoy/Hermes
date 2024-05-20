import { Component } from '@angular/core';
import {io} from 'socket.io-client';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-table-component',
  standalone: true,
  imports: [],
  templateUrl: './table-component.component.html',
  styleUrl: './table-component.component.css'
})
export class TableComponentComponent {

  private socket = io('http://localhost:3000');

  sendMessage(){
    console.log("Sending to socket");
    //this.socket.emit('connection');
    this.socket.emit('chat message', "This is the first of many tests.");
  }

  testingClick(){
    console.log("Click Recieved");
  }
}
