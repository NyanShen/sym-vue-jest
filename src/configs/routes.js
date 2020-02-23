import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/home.vue";
import Person from "../pages/person.vue";
import Search from "../pages/search/index.vue";
import searchTaxpayer from "../pages/search/taxpayer/index.vue";
import Apply from "../pages/apply/index.vue";
import Declare from "../pages/declare/index.vue";
import ChildrenEducation from "../pages/declare/children-education/index.vue";
import Information from "../pages/person/information.vue";
import Employee from "../pages/person/employee.vue";
import Family from "../pages/person/family.vue";
import CreditCard from "../pages/person/credit_card.vue";
import PersonApply from "../pages/person/apply.vue";
import Security from "../pages/person/security.vue";

Vue.use(Router);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/declare",
        name: "declare",
        component: Declare,
        children: [
        ]
    },
    {
        path: '/declare/children_education',
        name: 'children_education',
        component: ChildrenEducation
    },
    {
        path: "/apply",
        name: "apply",
        component: Apply
    },
    {
        path: "/search",
        name: "search",
        component: Search
    },
    {
        path: '/search/taxpayer',
        name: 'search_taxpayer',
        component: searchTaxpayer
    },
    {
        path: "/person",
        name: "person",
        component: Person,
        children: [
            {
                path: '/information',
                name: 'person_information',
                component: Information
            },
            {
                path: '/employee',
                name: 'person_employee',
                component: Employee
            },
            {
                path: '/family',
                name: 'person_family',
                component: Family
            },
            {
                path: '/credit_card',
                name: 'person_credit_card',
                component: CreditCard
            },
            {
                path: '/my_apply',
                name: 'person_apply',
                component: PersonApply
            },
            {
                path: '/security',
                name: 'person_security',
                component: Security
            }
        ]
    }
]
export default new Router({ routes });
