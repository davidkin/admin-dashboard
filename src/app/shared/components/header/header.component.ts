import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebar: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onToggleSidebar() {
    this.toggleSidebar.emit(null);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
