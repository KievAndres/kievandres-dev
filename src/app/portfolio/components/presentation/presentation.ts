import { Component } from '@angular/core';
import { StellarCube } from "@/app/shared/components/stellar-cube/stellar-cube";
import { PresentationDesktop } from "./presentation-desktop/presentation-desktop.component";
import { PresentationMobile } from "./presentation-mobile/presentation-mobile";

@Component({
  selector: 'presentation',
  imports: [PresentationDesktop, PresentationMobile],
  templateUrl: './presentation.html',
  styleUrl: './presentation.scss',
})
export class Presentation { }
