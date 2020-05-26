import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import resizeEvent from '../../utils/resize';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebar: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onToggleSidebar(): void {
    this.toggleSidebar.emit(null);

    resizeEvent();
  }

}
