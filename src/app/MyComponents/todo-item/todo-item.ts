import {Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  imports: [CommonModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css'
})
export class TodoItem implements OnInit{
  @Input() todo!: Todo; 
  @Input() i: number | undefined; // index of the todo item
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoChecked: EventEmitter<Todo> = new EventEmitter();
  constructor(){ }
  ngOnInit(): void { 
  }

  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggered");
  }

  onCheckboxClick(todo: Todo){
   this.todoChecked.emit(todo);
  }
}
