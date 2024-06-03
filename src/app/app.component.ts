import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlyoverComponent } from './components/flyover/flyover.component';
import { FlyoverstateService } from './services/flyoverstate.service';
import { ParentComponent } from './components/parent/parent.component';
import { ComponentOneComponent } from './components/component-one/component-one.component';
import { ComponentTwoComponent } from './components/component-two/component-two.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FlyoverComponent, ParentComponent, ComponentOneComponent, ComponentTwoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  constructor(public flyOverState: FlyoverstateService){

  }
  ngOnInit(): void {
    
  }
  // ngOnInit(): void {
  //   this.flyOverState.flyOverState.subscribe((value) => {
  //     this.state = value;
  //   });
  // }

openFlyOver() {
  this.flyOverState.setComponent("componentTwo")
  this.flyOverState.openFlyover();
}
  title = 'flyoverapp';

}
