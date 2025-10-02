import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule] // <- импортируем RouterModule прямо в компонент
})
export class AppComponent {
  likes = 0;

  onLike() {
    this.likes++;
    console.log(`Likes increased to: ${this.likes}`);
  }

}
