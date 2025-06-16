import { Component, inject } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { TableComponent } from '../../components/table/table.component';
import { IEmployee } from '../../types/employee';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
   
 
} from '@angular/material/dialog';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import {MatInputModule} from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { debounce, debounceTime } from 'rxjs';
import { PagedData } from '../../types/paged-data';


@Component({
  selector: 'app-employee',
  imports: [TableComponent,MatButtonModule,MatInputModule,ReactiveFormsModule,MatFormFieldModule,],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
httpService=inject(HttpService);
pagedEmployeeData!:PagedData<IEmployee>
showCols=['id','name','email','phone','action'];
filter:any={
  pageIndex:0,
  pageSize:2
};


ngOnInit(){
  this.getLatestData();

  this.searchControl.valueChanges.pipe(debounceTime(300)).subscribe((result:string | null)=>{
    console.log(result);
    this.filter.search=result;
    this.filter.pageIndex=0;
    this.getLatestData();
  });
}

searchControl=new FormControl('');

totalData!:number;

getLatestData(){
  this.httpService.getEmployeeList(this.filter).subscribe((result)=>{
    this.pagedEmployeeData=result;
   
  });
}

edit(employee:IEmployee){
 let ref=this.dialog.open(EmployeeFormComponent, {
     
      panelClass:'m-auto',
      data:{
        employeeId:employee.id,
      },
    });
    ref.afterClosed().subscribe(result=>{
     this.getLatestData();
    });
    
}
delete(employee:IEmployee){
  console.log("Employee to delete:", employee); 
  this.httpService.deleteEmployee(employee.id).subscribe(()=>{
  alert("Record Deleted.")
  this.getLatestData();
  });

}
add(){
  this.openDialog();
   data:{
    
   }
 
}

readonly dialog = inject(MatDialog);
openDialog(): void {
    let ref=this.dialog.open(EmployeeFormComponent, {
     
      panelClass:'m-auto',
      
    });
    ref.afterClosed().subscribe(result=>{
     this.getLatestData();
    });

  }
  pageChange(event:any){
    console.log(event);
   this.filter.pageIndex=event.pageIndex;
   this.getLatestData();

  }

 
}
