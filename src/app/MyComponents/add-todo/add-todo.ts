import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';
// import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css'
})
export class AddTodo implements OnInit {
  title: string = "";
  desc: string = "";
  sno: number = 0;

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    if (this.title && this.desc) {
      const todo = {
        sno: this.sno,
        title: this.title,
        desc: this.desc,
        active: true
      };
      this.todoAdd.emit(todo);
      // Emit the new todo to the parent component
      console.log("New Todo Added:", todo);
      // Reset form fields
      this.title = "";
      this.desc = "";
      this.sno++;
    } else {
      alert("Title and Description cannot be empty");
    }
  }

}
