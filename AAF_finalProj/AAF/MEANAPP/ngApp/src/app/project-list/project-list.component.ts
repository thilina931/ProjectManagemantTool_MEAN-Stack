import { Component, OnInit ,EventEmitter } from '@angular/core';
import { Project } from 'src/app/project';



@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  inputs : ['projects'],
  outputs:['SelectProject']
})
export class ProjectListComponent implements OnInit {
  
   public SelectProject =new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  //selection from onclick 
  
  onSelect(proj:Project){
    this.SelectProject.emit(proj); 
  }

}
