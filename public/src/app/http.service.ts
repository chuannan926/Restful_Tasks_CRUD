import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  getTasksService(){
    console.log("In service getTasks");
    // let tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/tasks');
  }

  constructor(private _http: HttpClient) { 
    console.log("In constructor service");
  }


  postNewTaskService(data){
    console.log("in post service");
    return this._http.post('/new',data);
  }

  updateTaskService(id, data){
    return this._http.patch('/update/'+ id,data);
  }

  deleteTaskService(id){
    return this._http.get('/delete/'+ id);
  }
}

