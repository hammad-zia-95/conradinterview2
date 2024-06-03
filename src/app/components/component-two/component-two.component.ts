import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-two.component.html',
  styleUrl: './component-two.component.css'
})
export class ComponentTwoComponent {

}
