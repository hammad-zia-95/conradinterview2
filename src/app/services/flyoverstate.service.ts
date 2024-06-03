import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlyoverstateService {


  constructor() { }
  flyOverState = new Subject<boolean>();
  state: boolean = false;
  componentName: string = "";
  componentSubject = new Subject<string>();


  openFlyover(){
    console.log(this.componentName)
    this.flyOverState.next(true);
  }

  closeFlyOver(){
    this.flyOverState.next(false);
  }

  setComponent(name: string){
    this.componentName = name;
    this.componentSubject.next(name);
  }


}
