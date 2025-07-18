import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Todo} from "../../Todo";
import { CommonModule } from '@angular/common';
import { TodoItem } from "../todo-item/todo-item";
import { AddTodo } from "../add-todo/add-todo";


@Component({
  selector: 'app-todos',
  // imports: [],
  imports: [RouterOutlet, CommonModule, TodoItem, AddTodo],
  templateUrl: './todos.html',
  styleUrl: './todos.css'
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  constructor(){
    this.todos = [
      {
        sno: 2,
        title: "This is title of the first to do",
        desc: "Description 1",
        active: true
      },
      {
        sno: 3,
        title: "This is title of the 2nd to do",
        desc: "Description 2",
        active: true
      },
      {
        sno: 4,
        title: "This is title of the 3rd to do",
        desc: "Description 3",
        active: true
      }
    ]
  }
  ngOnInit(): void {
  }

  deleteToDo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    console.log("Todo has been deleted");
  }

  addToDo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    console.log("New Todo has been added");
  }
}
