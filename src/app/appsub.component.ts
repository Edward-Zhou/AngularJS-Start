import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Sub {{name}}</h1>
  `,
})
export class AppSubComponent  { name = 'Angular'; }
