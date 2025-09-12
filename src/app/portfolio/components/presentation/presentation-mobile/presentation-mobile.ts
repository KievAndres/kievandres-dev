import { Component } from '@angular/core';
import { StellarCube } from "@/app/shared/components/stellar-cube/stellar-cube";

@Component({
  selector: 'presentation-mobile',
  imports: [StellarCube],
  templateUrl: './presentation-mobile.html',
  styleUrl: './presentation-mobile.scss',
})
export class PresentationMobile { }
