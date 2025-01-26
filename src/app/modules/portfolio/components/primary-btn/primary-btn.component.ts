import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-primary-btn',
  imports: [],
  templateUrl: './primary-btn.component.html',
  styleUrl: './primary-btn.component.scss'
})
export class PrimaryBtnComponent {
  @Input() btn_content : string = '';
  @Input() btn_color : string = '';

}
