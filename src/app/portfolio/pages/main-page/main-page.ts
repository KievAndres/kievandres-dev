import { Component } from '@angular/core';
import { Particles } from "@shared/components/particles/particles";
import { Sparkles } from "@shared/components/sparkles/sparkles";
import { StellarCube } from "@/app/shared/components/stellar-cube/stellar-cube";

@Component({
  selector: 'main-page',
  imports: [Particles, Sparkles, StellarCube],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export default class MainPage { }
