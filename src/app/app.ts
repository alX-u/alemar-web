import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthModule } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
