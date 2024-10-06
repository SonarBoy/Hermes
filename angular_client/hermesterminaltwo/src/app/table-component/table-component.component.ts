import { Component,ViewChild,ElementRef } from '@angular/core';
import {io} from 'socket.io-client';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { TableBroadcasterService } from '../table-broadcaster.service';

@Component({
  selector: 'app-table-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './table-component.component.html',
  styleUrl: './table-component.component.css'
})


export class TableComponentComponent {

  //private socket = io('http://localhost:3000');
  private socket= io('http://localhost:3000');
  public restrauntId: string = "";
  public sectionId: string = "";
  public tableId: string = "";

  // TODO :Remove after service testing complete
  public s  = new TableBroadcasterService();

  

  constructor() { }

  ngOnInit() { 
    
  }

  sendMessage(){
    

    /* // TODO :Remove after service testing complete
    */
    this.s.printOutServiceData(); 
    
    
    console.log("Sending to socket");


    // TODO : Move to Service can be uncommented for testing.
    this.socket.emit('connection');
    this.socket.emit('chat message', {restrauntId: this.restrauntId , sectionId: this.sectionId , tableId: this.tableId}); 
  }

  testingClick(){

     

    console.log("Click Recieved");
    console.log("Major Text Test: " + this.restrauntId + " | " + this.sectionId + " | " + this.tableId);
  }

  myFunction(event: any){
    console.log("The Text from the text box is :" + event.target.value);
    
  }
}
