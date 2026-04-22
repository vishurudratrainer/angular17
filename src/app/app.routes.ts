import { Routes } from '@angular/router';
import { Postge1Component } from './postge1/postge1.component';
import { Todos1Component } from './todos1/todos1.component';
import { Text1Component } from './text1/text1.component';
import { SquareegComponent } from './squareeg/squareeg.component';
import { Template1Component } from './template1/template1.component';
import { Template2Component } from './template2/template2.component';
import { Navigate1Component } from './navigate1/navigate1.component';
import { Navigate2Component } from './navigate2/navigate2.component';
import { SingletodosComponent } from './singletodos/singletodos.component';
import { TodostableComponent } from './todostable/todostable.component';
import { ChartComponent } from './chart/chart.component';
import { ParentComponent } from './parent/parent.component';
import { Todos3Component } from './todos3/todos3.component';
export const routes: Routes = [
    { path: '', component: SquareegComponent },
    { path: 'post', component: Postge1Component },
    { path: 'todos', component: Todos1Component },
    { path: "text1", component: Text1Component },
    { path: "template1", component: Template1Component },
    { path: "template2", component: Template2Component },
    { path: "navigate1", component: Navigate1Component },
    { path: "navigate2/:userId", component: Navigate2Component },
    { path: "todostable", component: TodostableComponent },
    { path: "singletodo/:todoId", component: SingletodosComponent },
    { path: "chart", component: ChartComponent },
    { path: "parent", component: ParentComponent },
    { path: "todos3", component: Todos3Component }


];
