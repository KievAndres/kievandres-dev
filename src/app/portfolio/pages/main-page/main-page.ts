import { Component } from '@angular/core';
import { Particles } from "@shared/components/particles/particles";
import { Sparkles } from "@shared/components/sparkles/sparkles";

@Component({
  selector: 'main-page',
  imports: [Particles, Sparkles],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export default class MainPage { }
