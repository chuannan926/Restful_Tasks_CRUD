import { Component } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  variableName = "API";
  isClicked:any;
  all_tasks : any;
  one_task: any;
  newTask :any;
  delete_task :any;

  constructor(private _httpService: HttpService){}
  ngOnInit(){
    // this.getTasksFromService();
    this.isClicked = false;
    this.newTask = {title: "", description:""};
  }
  getTasksComponent(){
    let observable = this._httpService.getTasksService();
    observable.subscribe(data => {
      console.log("Got our tasks in our component!", data);
      this.all_tasks = data;  
      this.isClicked = true;
    });
  }
  onSubmitComponent(){
    console.log("YOoooooOOO");
    let observable = this._httpService.postNewTaskService(this.newTask);
    observable.subscribe(data=>{
      console.log("In OnSubmit", data);
      this.newTask ={title:"", description:""};
      this.getTasksComponent();
    });
    
  }


  onButtonClickParams(i): void { 
      console.log(`Click event is working with num param: ${i}`);
      // let observable = this._httpService.getOneTask(num);
      this.one_task = this.all_tasks[i];
      console.log(this.one_task);

  }

  updateSubmitComponent(){
    console.log("Hiiiiiiii");
    let observable = this._httpService.updateTaskService(this.one_task._id, this.one_task);
    observable.subscribe(data=>{
      this.one_task= {title:this.one_task.title, description:this.one_task.description};
    })
  }

  Delete(i){
    console.log(i);
    this.delete_task = this.all_tasks[i];
    let observable = this._httpService.deleteTaskService(this.delete_task._id);
    observable.subscribe(data=>{
      console.log(data);
      this.getTasksComponent();
    })
  }

  
}
