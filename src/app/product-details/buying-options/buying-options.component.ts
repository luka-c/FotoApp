import { Component, OnInit } from '@angular/core';
import { Option } from './options.model';

@Component({
  selector: 'app-buying-options',
  templateUrl: './buying-options.component.html',
  styleUrls: ['./buying-options.component.css']
})
export class BuyingOptionsComponent implements OnInit {
  productName: string = "IMAGE 001";
  options: Option[] = [
    new Option("LARGE", "2667x4000", "Print", 170.00, false),
    new Option("SMALL", "1072x1600", "Web", 130.00, false)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
