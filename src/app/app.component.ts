import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
  task:any;
  id:any;
  list:any=[];

  addTask(task:any){
    this.list.push({id:this.list.length,name:task})
  }
  remove(id:any){
    console.log(id);
    this.list=this.list.filter((item:any)=>item.id!==id)
    
  }
}
