import { Component, OnInit, EventEmitter} from '@angular/core';


@Component({
  selector: 'project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  inputs: ['project'],
  outputs: ['updateProjectEvent','deleteProjectEvent']
})
export class ProjectDetailsComponent implements OnInit {
           project :any;
   
   private edditTitle:boolean=false; 
   private updateProjectEvent =new EventEmitter;
   private deleteProjectEvent =new EventEmitter;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.edditTitle =false;
  }

  onedditTitleClick(){
    this.edditTitle=true;
  }
  updateproject(){
    this.updateProjectEvent.emit(this.project);
  }
  deleteproject(){
    this.deleteProjectEvent.emit(this.project);
  }
}
