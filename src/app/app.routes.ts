import { Routes } from '@angular/router';
import { VistaHomeComponentComponent} from "./public/vista-home-component/vista-home-component.component";
import { TableComponentComponent} from "./private/table-component/table-component.component";

export const routes: Routes = [
  {path: '', pathMatch: 'full', component: VistaHomeComponentComponent},
  {path: 'home', component: VistaHomeComponentComponent},
  {path: 'table', component: TableComponentComponent}
];
