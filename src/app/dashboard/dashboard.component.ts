import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public addTaskValue: string = "";
  public addsubTaskValue: string = "";
  public taskArr: Task[] = [];
  public modalVisibble = false;
  public titleModal = "this should change no?";
  constructor(){}

  ngOnInit(): void {
  }
  addNewTask(){
    var newTask = new Task(this.addTaskValue,"",1);
    this.taskArr.push(newTask);
  };

  addSubTask(){
    
  } 

  delete(id:number){
    this.taskArr = this.taskArr.filter((v,i)=>
    i !== id);

  }


  closeModal(){
    this.modalVisibble = false;
  }

  isWork(){
    
    this.modalVisibble = true;
    console.log("working modal")

  }

  addsub(){
    
  }
}
