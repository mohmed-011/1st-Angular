import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NAVBARComponent } from "./nav-bar/nav-bar.component";
import { FOOTERComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NAVBARComponent, FOOTERComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment1';
}
