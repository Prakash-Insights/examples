import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'table';
  listOfTitles = [
    "New York Municiple Income Funds",
    "Dynamic Incom Funds",
    "Corporate Strategy Funds",
    "New York Municiple Income Funds Alpha Beta ABC",
    "Income Funds Alpha Beta XYZ",
    "Municiple Income Funds Alpha Beta XYZ",
    "New York Municiple Income  Alpha Beta XYZ",
    "New York Municiple  Funds Alpha Beta XYZ",
  ]
  testObj = {
    id: '1',
    name: 'ABC',
    desc: 'This is desc',
    series: [
      {
        name: 'xyz',
        value: 42,
        status: 'high',
        cleared: true,
        validationstatus: 'Resolved'
      },
      {
        name: 'xyz',
        value: 42,
        status: 'high',
        cleared: true,
        validationstatus: 'Resolved'
      },
      {
        name: 'xyz',
        value: 0,
        status: 'NA',
        cleared: true,
        validationstatus: 'Resolved'
      },
      {
        name: 'xyz',
        value: 0,
        status: 'NA',
        cleared: true,
        validationstatus: 'Resolved'
      },
      {
        name: 'xyz',
        value: 0,
        status: 'NA',
        cleared: true,
        validationstatus: 'Resolved'
      },
      {
        name: 'xyz',
        value: 42,
        status: 'high',
        cleared: true,
        validationstatus: 'Resolved'
      },
      {
        name: 'xyz',
        value: 42,
        status: 'high',
        cleared: true,
        validationstatus: 'Resolved'
      },
      {
        name: 'xyz',
        value: 42,
        status: 'high',
        cleared: true,
        validationstatus: 'Resolved'
      },
      {
        name: 'xyz',
        value: 42,
        status: 'high',
        cleared: true,
        validationstatus: 'Resolved'
      },
      {
        name: 'xyz',
        value: 55,
        status: 'medium',
        cleared: false,
        validationstatus: 'Resolved'
      },
    ]
  };
  gridData = {
    data: {
      details: [
        { ...this.testObj },
        { ...this.testObj },
        { ...this.testObj },
        { ...this.testObj },

      ]
    }
  };

  isFluidGrid = this.gridData.data.details.length <= 4;

  gridColumns(count: Number) {
    return `repeat(${count},1fr)`;
  };
  gridcellWidth = 100 / this.gridData.data.details.length
    + '%'
}
