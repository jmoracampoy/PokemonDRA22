import { animate, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('dimBox', [
      transition('notDimmed => dimmed', [
        animate('10s')
      ]),
      transition('dimmed => notDimmed', [
        animate('5s')
      ])
    ])
  ]
})
export class MenuComponent implements OnInit {

  rutaLogo = "./assets/pokeballC.png";
  isDimmed = true
  constructor() { }

  ngOnInit(): void {
  }



}
