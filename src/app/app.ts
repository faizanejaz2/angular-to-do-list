import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, TodosComponent, CommonModule],  // add Todos because <app-todos> is used in app.html
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('practice-app1');
  title = 'practice-app1';
  constructor(){
    setTimeout(() => {
      this.title = "Change Title";
    }, 2000);
  }
  
}
