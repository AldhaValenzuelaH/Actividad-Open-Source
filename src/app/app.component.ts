import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToolbarComponentComponent} from "./public/toolbar-component/toolbar-component.component";
import {TableComponentComponent} from "./private/table-component/table-component.component";
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponentComponent, TableComponentComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled1';
}
