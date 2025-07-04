import {Component } from '@angular/core';
import { inject } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { IDepartment } from '../../types/department';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { PagedData } from '../../types/paged-data';
import { TableComponent } from '../../components/table/table.component';
import { Action } from 'rxjs/internal/scheduler/Action';
import { NgIf } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-departments',
  imports: [MatButtonModule,MatInputModule,MatFormFieldModule,FormsModule,TableComponent,NgIf,],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css'
})
export class DepartmentsComponent {
httpService=inject(HttpService);
departments!:PagedData<IDepartment>;

isFormOpen=false;

filter={
  pageIndex:0,
  pageSize:2
}

ngOnInit(){
  this.getLatestData();
}

showCols=['id','name','action'];

getLatestData()
{
  this.httpService.getDepartments(this.filter).subscribe((result)=>{
   this.departments=result;
  });
}
departmentName!:string;
addDepartment(){
console.log(this.departmentName);
this.httpService.addDepartment(this.departmentName).subscribe(()=>{
  alert("Records Saved.")
  this.isFormOpen=false;
  this.getLatestData();
});
}
editId=0;
editDepartment(department:IDepartment){
this.departmentName=department.name;
this.isFormOpen=true;
this.editId=department.id;
}
updateDepartment(){
  this.httpService.updateDepartment(this.editId,this.departmentName).subscribe(()=>{
  alert("Records Saved.")
  this.isFormOpen=false;
  this.getLatestData();
  this.editId=0
});
}
delete(id:number){
this.httpService.deleteDepartment(id).subscribe(()=>{
  alert("Record Deleted.")
   
  this.getLatestData();
 
});
}
pageChange(event:any){
    console.log(event);
   this.filter.pageIndex=event.pageIndex;
   this.getLatestData();

  }
}
