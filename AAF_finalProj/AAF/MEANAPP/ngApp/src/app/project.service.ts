import { Injectable } from '@angular/core';
import { Http , Response ,Headers ,RequestOptions } from'@angular/http';
import 'rxjs/add/operator/map';
import { Project } from './project';
import {HttpHeaders} from '@angular/common/http';
import {Options} from 'selenium-webdriver/edge';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  

  public auth:any;
  public headers:any;
  constructor(private _http:Http) { 
    this.auth="Bearer "+localStorage.getItem("id_token");
    this.headers=new Headers({'Authorization':this.auth,'Content-Type':'application/json; charset=utf-8'});
  }
  
  getProjects(){
     
    return this._http.get("http://localhost:3000/api/projects",{headers:this.headers})
    .map(res =>res.json());
  }
  addproject (project:Project){
    
    let options = new RequestOptions({headers:this.headers});
    return this._http.post("http://localhost:3000/api/project",JSON.stringify(project),options )
    .map(res => res.json());
  }
  updateproject(project:Project){
   
    let options = new RequestOptions({headers:this.headers});
    return this._http.put("http://localhost:3000/api/project/"+project._id ,JSON.stringify(project),options )
    .map(res => res.json());
  }
  deleteproject(project:Project){

    return this._http.delete("http://localhost:3000/api/project/"+project._id)
    .map(res => res.json());
  }
  
}
