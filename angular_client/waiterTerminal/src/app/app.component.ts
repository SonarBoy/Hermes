import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QueryDisplayComponent } from './query-display/query-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,QueryDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'waiterTerminal';
}
