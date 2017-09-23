import { Component } from '@angular/core';
import { User } from './user.interface';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent 
{
  public user: User;

  public genders =
  [
    { value: 'F', display: 'Female' },
    { value: 'M', display: 'Male' }
  ]

  public roles = 
  [
    { value: 'admin', display: 'Administrator' },
    { value: 'guest', display: 'Guest' },
    { value: 'custom', display: 'Custom' }
  ]

  tableData = {};
  arrayObject = [];

  ngOnInit()
   {
    this.user = {
      name: '',
      gender: this.genders[0].value,
      role: null,
      isActive: false,
    }
  }

  save(isValid: boolean, f: User) 
  {
    // console.log(this.user);
    this.arrayObject.push(this.user);
    // console.log(this.arrayObject);
    if (!isValid) return;
  }
}