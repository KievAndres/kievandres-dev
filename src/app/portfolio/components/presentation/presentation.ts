import { Component } from '@angular/core';
import { StellarCube } from "@/app/shared/components/stellar-cube/stellar-cube";

@Component({
  selector: 'presentation',
  imports: [StellarCube],
  templateUrl: './presentation.html',
  styleUrl: './presentation.scss',
})
export class Presentation { }
