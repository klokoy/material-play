import { Component } from '@angular/core';

@Component({
  templateUrl: './models.component.html'
})

export class ModelsComponent {
  models = [
    {
      name: 'model 1',
      id: 1
    }, {
      name: 'model 2',
      id: 2
    }, {
      name: 'model 3',
      id: 3
    }, {
      name: 'model 4',
      id: 4
    }
  ]
}
