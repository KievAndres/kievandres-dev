import { Component } from '@angular/core';
import { StellarCube } from "@/app/shared/components/stellar-cube/stellar-cube";

@Component({
  selector: 'presentation-desktop',
  imports: [StellarCube],
  templateUrl: './presentation-desktop.component.html',
  styleUrl: './presentation-desktop.component.scss',
})
export class PresentationDesktop { }
