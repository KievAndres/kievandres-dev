import { Component } from '@angular/core';
import { Particles } from "../particles/particles";
import { Sparkles } from "../sparkles/sparkles";

@Component({
  selector: 'stellar-background',
  imports: [Particles, Sparkles],
  templateUrl: './stellar-background.html',
  styleUrl: './stellar-background.scss',
})
export class StellarBackground { }
