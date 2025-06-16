import { Component,EventEmitter,Input, Output } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { NgIf } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PagedData } from '../../types/paged-data';
@Component({
  selector: 'app-table',
  imports: [MatTableModule,MatCardModule,MatButtonModule,MatPaginatorModule,NgIf,],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
@Input() PagedData!:PagedData<any>;
@Input() displayedColumns:any[]=[];
@Output() onEdit=new EventEmitter<any>();
@Output() onDelete=new EventEmitter<any>();
@Output() onPageChange=new EventEmitter<any>();
@Input() emitOnlyId: boolean = false;

@Input() pageIndex!:number;
@Input() pageSize!:number;
edit(rowData:any){
  this.onEdit.emit(rowData);
}
delete(rowData:any){
  
  this.onDelete.emit(this.emitOnlyId ? rowData.id : rowData);
}
 pageChange(event:any){
    console.log(event);
   this.onPageChange.emit(event);

  }


}
