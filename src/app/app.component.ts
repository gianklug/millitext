import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
  ) { this.renderText() }
  title = 'millitext';
  input = 'HELLO WORLD';
  spaceX = 1;
  // arrays of numbers

  alphabet: { [key: string]: Pixel[][] } = {
    0: [
      [
        { R: 0, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 1, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 1 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 1, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 0, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
    ],
    1: [
      [
        { R: 0, G: 0, B: 1 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 1, B: 1 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 1 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 1 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
    ],
    2: [
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 0, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 1, B: 0 },
      ],
    ],
    3: [
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 0, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
    ],
    4: [
      [
        { R: 1, G: 0, B: 0 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 1, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 0 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 0 },
        { R: 1, G: 0, B: 0 },
      ],
    ],
    5: [
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
    ],
    6: [
      [
        { R: 0, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 0, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
    ],
    7: [
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 1, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 0 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 1 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 1 },
        { R: 0, G: 0, B: 0 },
      ],
    ],
    8: [
      [
        { R: 0, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 0, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 0, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
    ],
    9: [
      [
        { R: 0, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 0, G: 1, B: 1 },
        { R: 1, G: 1, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 0, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
    ],
    A: [
      [
        { R: 0, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
    ],
    B: [
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
    ],
    C: [
      [
        { R: 0, G: 1, B: 1 },
        { R: 1, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 1, B: 1 },
        { R: 1, G: 1, B: 0 },
      ],
    ],
    D: [
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
    ],
    E: [
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 1, B: 0 },
      ],
    ],
    F: [
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 0, B: 0 },
      ],
    ],
    G: [
      [
        { R: 0, G: 1, B: 1 },
        { R: 1, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 1 },
        { R: 1, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 0, G: 1, B: 1 },
        { R: 1, G: 1, B: 0 },
      ],
    ],
    H: [
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
    ],
    I: [
      [
        { R: 0, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 1 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 1 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 1 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
    ],
    J: [
      [
        { R: 0, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 0, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
    ],
    K: [
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 1, B: 1 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
    ],
    L: [
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 1, B: 0 },
      ],
    ],
    M: [
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 1, B: 0 },
        { R: 1, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 1 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
    ],
    N: [
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 1, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 1 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 1, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
    ],
    O: [
      [
        { R: 0, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 0, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
    ],
    P: [
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 0, B: 0 },
      ],
    ],
    Q: [
      [
        { R: 0, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 1, B: 1 },
        { R: 0, G: 1, B: 0 },
      ],
    ],
    R: [
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
    ],
    S: [
      [
        { R: 0, G: 1, B: 1 },
        { R: 1, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
    ],
    T: [
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 1, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 1 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 1 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 1 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 1 },
        { R: 0, G: 0, B: 0 },
      ],
    ],
    U: [
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 0, G: 1, B: 1 },
        { R: 1, G: 0, B: 0 },
      ],
    ],
    V: [
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 0, G: 1, B: 0 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 1 },
        { R: 0, G: 0, B: 0 },
      ],
    ],
    W: [
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 1 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 1, B: 0 },
        { R: 1, G: 1, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
    ],
    X: [
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 0, G: 1, B: 0 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 1 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 1, B: 0 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
    ],
    Y: [
      [
        { R: 1, G: 0, B: 0 },
        { R: 0, G: 1, B: 0 },
      ],
      [
        { R: 0, G: 1, B: 0 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 1 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 1 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 1 },
        { R: 0, G: 0, B: 0 },
      ],
    ],
    Z: [
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 1, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 0 },
        { R: 1, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 0, B: 1 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 0, G: 1, B: 0 },
        { R: 0, G: 0, B: 0 },
      ],
      [
        { R: 1, G: 1, B: 1 },
        { R: 1, G: 1, B: 0 },
      ],
    ],
    ' ': [

      [{ R: 0, G: 0, B: 0 }],
      [{ R: 0, G: 0, B: 0 }],
      [{ R: 0, G: 0, B: 0 }],
      [{ R: 0, G: 0, B: 0 }],
      [{ R: 0, G: 0, B: 0 }],
    ]
  }
  screen: Pixel[][] = this.alphabet['A']

  getPixel(x: number, y: number): Pixel {
    console.log(`pixel: ${x}, ${y}`)
    return this.screen[x][y]
  }

  getScreenWidth(): number {
    console.log(`screen width: ${this.screen[0].length}`)
    return this.screen[0].length
  }
  getScreenHeight(): number {
    console.log(`screen height: ${this.screen.length}`)
    return this.screen.length
  }

  renderText(): void {
    let rows: Pixel[][] = [[], [], [], [], []]
    for (let i = 0; i < rows.length; i++) {
      for (let c of this.input) {
        let letter = this.alphabet[c.toUpperCase()]
        if (!letter) {
          letter = this.alphabet[' ']
        }
        rows[i] = [...rows[i], ...letter[i]]
        for (let j = 0; j < this.spaceX; j++) {
          rows[i] = [...rows[i], ...this.alphabet[' '][i]]
        }
      }
    }
    let newScreen: Pixel[][] = []
    for (let row of rows) {
      newScreen = [...newScreen, row]
    }
    this.screen = newScreen
  }

  generateImage() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.error('Failed to get 2D context');
      return;
    }

    const cellSize = 1;
    canvas.width = this.screen[0].length * cellSize;
    canvas.height = this.screen.length * cellSize;

    for (let y = 0; y < this.screen.length; y++) {
      for (let x = 0; x < this.screen[y].length; x++) {
        const color = this.screen[y][x];
        ctx.fillStyle = `rgb(${color.R * 255}, ${color.G * 255}, ${color.B * 255})`;
        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
    }

    const imgDataUrl = canvas.toDataURL('image/png');

    const a = document.createElement('a');
    a.href = imgDataUrl;
    a.style.display = 'none';
    a.download = `${this.input.replaceAll(' ','_')}.png`;
    a.click();

  }
}
type Pixel = {
  R: number;
  G: number;
  B: number;
}


