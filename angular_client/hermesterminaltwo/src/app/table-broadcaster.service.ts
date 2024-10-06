import { Injectable } from '@angular/core';
import {io} from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class TableBroadcasterService {

  constructor() {

  }

  printOutServiceData(){

    /*
    ! Uncomment to fire off the standard message
    let x = io("http://localhost:3000");
    console.log("Printing Out from service.");
    x.emit('connection');
    //x.emit('chat message', {restrauntId: this.restrauntId , sectionId: this.sectionId , tableId: this.tableId});
    x.emit('chat message', {restrauntId: 100 , sectionId: 200, tableId: 300});
    */
  }

}
