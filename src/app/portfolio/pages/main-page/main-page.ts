import { Component } from '@angular/core';
import { StellarCube } from "@/app/shared/components/stellar-cube/stellar-cube";
import { StellarBackground } from "@/app/shared/components/stellar-background/stellar-background";

@Component({
  selector: 'main-page',
  imports: [StellarCube, StellarBackground],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export default class MainPage { }
