
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './core/form.component';
import { TableComponent } from './core/table.component';
import { NotFoundComponent } from './core/notFound.component';
import { ProductCountComponent } from './core/productCount.component';
import { CategoryCountComponent } from './core/categoryCount.component';
import { ModelResolver } from './model/model.resolver';
import { Model } from './model/repository.model';
import { TermsGuard } from './terms.guard';
import { UnsavedGuard } from './core/unsaved.guard';
import { LoadGuard } from './load.guard';

const routes: Routes = [
    {
        path: "ondemand",
        loadChildren: "./ondemand/ondemand.module#OndemandModule"
    },
    { path: "", redirectTo: "/ondemand", pathMatch: "full" }
]
export const routing = RouterModule.forRoot(routes);

