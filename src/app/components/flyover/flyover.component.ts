import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FlyoverstateService } from '../../services/flyoverstate.service';

@Component({
  selector: 'app-flyover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flyover.component.html',
  styleUrl: './flyover.component.css'
})
export class FlyoverComponent implements OnInit {
  constructor(private flyOverState: FlyoverstateService){

  }
  ngOnInit(): void {
    
    this.flyOverState.flyOverState.subscribe((value) => {
      this.state = value;
    });
  }
  state: boolean = false;

  close(){
    this.flyOverState.closeFlyOver();
  }

  
}
