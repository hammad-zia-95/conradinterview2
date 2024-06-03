import { Component } from '@angular/core';
import { FlyoverstateService } from '../../services/flyoverstate.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  constructor(private flyOverState: FlyoverstateService){

  }
openFlyOver() {
this.flyOverState.openFlyover();
}

open(){
  this.flyOverState.setComponent("componentOne")
  this.flyOverState.openFlyover();
}

}
