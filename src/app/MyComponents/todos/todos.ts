import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Todo} from "../../Todo";
import { CommonModule } from '@angular/common';
import { TodoItem } from "../todo-item/todo-item";
import { AddTodo } from "../add-todo/add-todo";
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-todos',
  // imports: [],
  imports: [RouterOutlet, CommonModule, TodoItem, AddTodo],
  templateUrl: './todos.html',
  styleUrl: './todos.css'
})
export class TodosComponent implements OnInit {
  localItem!: string | null;
  todos: Todo[];
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.localItem = localStorage.getItem("todos");
      if (this.localItem == null) {
        this.todos = [];
      } else {
        this.todos = JSON.parse(this.localItem);
      }
    } else {
      this.todos = [];
    }
  }
  ngOnInit(): void {
  }

  deleteToDo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    console.log("Todo has been deleted");
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addToDo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    console.log("New Todo has been added");
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleToDo(todo:Todo){
    const index = this.todos.indexOf(todo);
    // this.todos.splice(index, 1);
    // this.todos.push(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
