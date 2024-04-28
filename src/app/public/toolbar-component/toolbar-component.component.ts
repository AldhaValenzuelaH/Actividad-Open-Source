import { Component, ViewEncapsulation } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar-component',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    MatToolbar,
    MatButton
  ],
  templateUrl: './toolbar-component.component.html',
  styleUrl: './toolbar-component.component.css'
})
export class ToolbarComponentComponent {
  constructor(private router: Router) { }
  onRecoveryPasswordClick() {
    this.router.navigate(['home']);
  }
  onTableClick() {
    this.router.navigate(['table']);
  }
}
