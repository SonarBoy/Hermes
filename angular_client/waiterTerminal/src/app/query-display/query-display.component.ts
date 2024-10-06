import { Component } from '@angular/core';
import {io} from 'socket.io-client';
import { Restraunt,TableQuery } from '../RestrauntQueue';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-query-display',
  standalone: true,
  imports: [NgFor],
  templateUrl: './query-display.component.html',
  styleUrl: './query-display.component.css'
})
export class QueryDisplayComponent {


  private socket= io('http://localhost:3000');
  private number = -1; 


  
  public tableQueryList:Restraunt = {restrauntName:"",currentQueue:[]};
  


  ngOnInit() { 
    //this.socket.connect();
    //console.log("INit");
    this.socket.emit('connection');
    this.onRecieved();

    this.socket.on('connection', function() {console.log("Connected.")});



    this.socket.on('broadcastingToWaiterTermial', (currentQueue) => {
      this.number += 100;
      console.log("Alex's Code: " + currentQueue);
      

      //console.log("Type " + response.get("currentQueue"));
      //console.log("Body " + response.keys());

      //this.tableQueryList = JSON.stringify(currentQueue);
      this.tableQueryList = JSON.parse(currentQueue);
      console.log("Josh's Code: " +  this.tableQueryList.currentQueue);
      //console.log("Josh's Code: " + this.tableQueryList.at(0) + this.tableQueryList.at(1));


      // this.onRecieved();
      // this.onRecievedQueryList();
    });


    //Deletion Event 
    this.socket.on('',(table) =>{

    });

  
  }

  public onRecievedQueryList(){
    console.log("Running TableQueryList: "+ this.tableQueryList);
    
  }


  public onRecieved(){
    console.log("Running: "+ this.number);
    
  }

  public sendMessage(table: any){
    console.log("Section ID:" + table.sectionId);
    console.log("Table ID:" + table.tableId);

    this.socket.emit('DeleteTable',{restrauntId: table.restrauntId , sectionId: table.sectionId , tableId: table.tableId});
  }
}
