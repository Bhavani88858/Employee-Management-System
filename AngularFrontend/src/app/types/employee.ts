export interface IEmployee {
 id:number;
  name: string;
  email: string;
  phone: string;
  jobTitle: string;
  gender: Gender;
  departmentId: number | null;   // nullable
  userId?: number | null;      
  joiningDate: string;
 department:string;
  lastWorkingDate: string;
  dateOfBirth: string;
  
 
}

export enum Gender {
  Male = 0,
  Female = 1,
}
