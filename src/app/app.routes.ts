import { RouterModule } from '@angular/router';
import { ModelsComponent } from './models/models.component';
import { ModelComponent } from './models/model.component';

const routes = [
    { path: '', component: ModelsComponent },
    { path: ':id', component: ModelComponent}
];

export default RouterModule.forRoot(routes);