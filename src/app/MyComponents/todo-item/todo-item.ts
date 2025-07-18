import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-todo-item',
  // imports: [Todo],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css'
})
export class TodoItem implements OnInit{
  @Input()
  todo!: Todo; 
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  constructor(){ }
  ngOnInit(): void { 
  }

  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggered");
  }
}
