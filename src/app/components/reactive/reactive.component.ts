import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  constructor(private _fmb:FormBuilder) { }
  // registrationForm =new FormGroup({
  //   userName:new FormControl(''),
  //   passWord:new FormControl(''),
  //   confirm:new FormControl(''),
  //   address :new FormGroup({
  //     city:new FormControl(''),
  //     state:new FormControl(''),
  //     pincode:new FormControl('')
  //   })
  // })
  get username(){
    return this.registrationForm.get('userName');
  }
  get password(){
    return this.registrationForm.get('passWord');
  }
  registrationForm=this._fmb.group({
    userName:['',[Validators.required, Validators.minLength(3)]],
    passWord:['',Validators.required],
    confirm:[''],
    address:this._fmb.group({
      city:['',Validators.required],
      state:['',Validators.required],
      pincode:['',Validators.required]
    })
  })
submit(){
  console.log(this.registrationForm);
}
// display(){
//   this.registrationForm.patchValue({
//     userName: 'sumanth',
//     address:{
//       city:'hyderabadh',
//       state:'Telangana',
//       pincode:'500016'
//     }
//   })
// }
  ngOnInit(): void {
  }

}
