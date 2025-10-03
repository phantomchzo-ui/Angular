import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos-list',
  standalone: true,   
  imports: [CommonModule], 
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent {
  todos: any[] = [];
  loaded = false;


  constructor(private apiService: ApiService) {}

  loadTodos() {
    this.apiService.getTodos().subscribe(data => {
      console.log(this.loaded)
      this.todos = data.slice(0, 5); 
      this.loaded = true;
      console.log(this.loaded)
    });
  }
}
