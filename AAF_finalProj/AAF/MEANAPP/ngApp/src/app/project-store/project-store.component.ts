import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';



@Component({
  selector: 'app-project-store',
  templateUrl: './project-store.component.html',
  styleUrls: ['./project-store.component.css'],
  providers : [ProjectService]
  
})
export class ProjectStoreComponent implements OnInit {
   
  

   projects : Array <Project>;

 
   
   /*Project[]= [
     {"_id":"1","projectTitle":"ProjectTitle 1","url":"url 1","description":"desc 1"},
     {"_id":"2","projectTitle":"ProjectTitle 2","url":"url 2","description":"desc 2"},
     {"_id":"3","projectTitle":"ProjectTitle 3","url":"url 3","description":"desc 3"},
     {"_id":"4","projectTitle":"ProjectTitle 4","url":"url 4","description":"desc 4"}

   ];*/

     selectedProject: Project;
      //addform hide
    private hiddenewProject :boolean =true;
      //dependacy injection here
  constructor(private _projectService: ProjectService) { }

  ngOnInit() {
    this._projectService.getProjects()
    .subscribe(resPrjectData => this.projects = resPrjectData);
  }
  
  //assign the property project here
onSelectProject(project:any){
  this.selectedProject =project;
  this.hiddenewProject =true;
  console.log(this.selectedProject);
} 
//add project method

onSubmitADDProject(project:Project){
  this._projectService.addproject(project)
  .subscribe(resNewProject=>{
    this.projects.push(resNewProject);
    this.selectedProject = resNewProject;
  });
}

onUpdateProjectEvent(project:any){
this._projectService.updateproject(project)
.subscribe(resupdateproject => project = resupdateproject);
this.selectedProject = null;

};
///////////////////////
onDeleteProjectEvent(project:any){
  let projectArray =this.projects;
  this._projectService.deleteproject(project)
  .subscribe(resDeletedProject=>{
    for(let i=0; i<projectArray.length; i++)
    {
      if(projectArray[i]._id === project._id)
      {
        projectArray.splice(i,1);
      }
    }
  });
  this.selectedProject=null;
};
//////////////////////////////////
//hide add new project form method
newproject(){
  this.hiddenewProject = false;
}

}
