import { Component } from '@angular/core';
import { Presentation } from "../../components/presentation/presentation";

@Component({
  selector: 'main-page',
  imports: [Presentation],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export default class MainPage { }
