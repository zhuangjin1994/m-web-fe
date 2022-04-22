import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/First";
import { Forth } from "../components/welcome/Forth";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";
import { Welcome } from "../views/welcome/Welcome";

export const routes:RouteRecordRaw[]= [
    {
        path: '/', component: Welcome,
        children: [
            {path: 'First', component:First},
            { path: 'Second', component: Second },
            { path: 'Third', component: Third },
            {path:'Forth',component:Forth}
        ]
    }
]