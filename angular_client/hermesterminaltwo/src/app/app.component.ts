import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponentComponent } from './table-component/table-component.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TableComponentComponent,FormsModule,MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hermestermialtwo';
}
