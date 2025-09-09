import { Component } from '@angular/core';
import { Particles } from "../../../shared/components/neon/particles/particles";
import { Sparkles } from "../../../shared/components/neon/sparkles/sparkles";

@Component({
  selector: 'main-page',
  imports: [Particles, Sparkles],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export default class MainPage { }
