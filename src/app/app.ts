import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./portfolio/components/nav-bar/nav-bar";
import { StellarBackground } from "./shared/components/stellar-background/stellar-background";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, StellarBackground],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('kievandres.dev');
}
