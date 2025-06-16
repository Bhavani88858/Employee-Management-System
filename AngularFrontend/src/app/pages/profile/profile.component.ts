import { Component, inject, providePlatformInitializer,OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule
 } from '@angular/material/form-field';
 import { MatInputModule } from '@angular/material/input';
 import { MatButtonModule } from '@angular/material/button';
 import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  imports: [MatCardModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatButtonModule,
    MatIconModule,],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
authService=inject(AuthService);

profileForm!:FormGroup

fb=inject(FormBuilder)
ngOnInit(){

  this.profileForm=this.fb.group({
    email:[],
    profileImage:[],
    phone:[],
    name:[],
    password:[]
    
  })
  this.authService.getProfile().subscribe((result:any)=>{
    console.log(result);
    this.profileForm.patchValue(result);
    this.imageSrc=result.profileImage
  });

}
imageSrc!:string;

fileUpload(event:Event){
var target:any=event.target;
if(target.files && target.files[0]){
  const file=target.files[0];
  const reader=new FileReader();
  reader.onload=()=>{
  this.imageSrc=reader.result as string;
this.profileForm.patchValue({
 profileImage:this.imageSrc
});


  console.log(this.imageSrc);
  }
  reader.readAsDataURL(file);
}
  
}
onUpdate(){

  this.authService.updateProfile(this.profileForm.value).subscribe(result=>{
    alert("Profile Updated");
  })

}

}
