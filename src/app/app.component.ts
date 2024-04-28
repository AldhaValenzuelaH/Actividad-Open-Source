import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToolbarComponentComponent} from "./public/toolbar-component/toolbar-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled1';
}
