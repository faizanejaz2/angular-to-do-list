import { Routes } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos';
import { About } from './MyComponents/about/about'; // Assuming you have an AboutComponent

export const routes: Routes = [
    { path: '', component: TodosComponent  },
    { path: 'about', component: About },
];
