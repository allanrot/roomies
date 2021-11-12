import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'

//import middleware
import auth from "@/middleware/auth";
import guest from "@/middleware/guest";
import admin from "@/middleware/admin";
import admin_creator from "@/middleware/admin_creator";

import PasswordReset from "src/components/Dashboard/Views/Password/Reset.vue";
import PasswordEmail from "src/components/Dashboard/Views/Password/Email.vue";

// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'
// Dashboard pages
const Overview = () => import(/* webpackChunkName: "widgets" */ 'src/components/Dashboard/Views/Dashboard/Overview.vue')
const Widgets = () => import(/* webpackChunkName: "widgets" */ 'src/components/Dashboard/Views/Dashboard/Widgets.vue')

// Pages
import User from 'src/components/Dashboard/Views/Pages/UserProfile.vue'
import TimeLine from 'src/components/Dashboard/Views/Pages/TimeLinePage.vue'
import Login from 'src/components/Dashboard/Views/Pages/Login.vue'
import Register from 'src/components/Dashboard/Views/Pages/Register.vue'
import Lock from 'src/components/Dashboard/Views/Pages/Lock.vue'

// Components pages
import Buttons from 'src/components/Dashboard/Views/Components/Buttons.vue'
import GridSystem from 'src/components/Dashboard/Views/Components/GridSystem.vue'
import Panels from 'src/components/Dashboard/Views/Components/Panels.vue'
import SweetAlert from 'src/components/Dashboard/Views/Components/SweetAlert.vue'
import Notifications from 'src/components/Dashboard/Views/Components/Notifications.vue'
import Icons from 'src/components/Dashboard/Views/Components/Icons.vue'
import Typography from 'src/components/Dashboard/Views/Components/Typography.vue'

// Forms pages
const RegularForms  = () => import(/* webpackChunkName: "forms" */ 'src/components/Dashboard/Views/Forms/RegularForms.vue')
const ExtendedForms = () => import(/* webpackChunkName: "forms" */ 'src/components/Dashboard/Views/Forms/ExtendedForms.vue');
const ValidationForms = () => import(/* webpackChunkName: "forms" */ 'src/components/Dashboard/Views/Forms/ValidationForms.vue')
const Wizard = () => import(/* webpackChunkName: "forms" */ 'src/components/Dashboard/Views/Forms/Wizard.vue');

// TableList pages
const RegularTables = () => import(/* webpackChunkName: "tables" */ 'src/components/Dashboard/Views/Tables/RegularTables.vue');
const ExtendedTables = () => import(/* webpackChunkName: "tables" */ 'src/components/Dashboard/Views/Tables/ExtendedTables.vue');
const PaginatedTables = () => import(/* webpackChunkName: "tables" */ 'src/components/Dashboard/Views/Tables/PaginatedTables.vue');
// Maps pages
const GoogleMaps = () => import(/* webpackChunkName: "maps" */ 'src/components/Dashboard/Views/Maps/GoogleMaps.vue')
const FullScreenMap = () => import(/* webpackChunkName: "maps" */ 'src/components/Dashboard/Views/Maps/FullScreenMap.vue')
const VectorMaps = () => import(/* webpackChunkName: "maps" */ 'src/components/Dashboard/Views/Maps/VectorMapsPage.vue');

// Calendar
import Calendar from 'src/components/Dashboard/Views/Calendar/CalendarRoute.vue'
// Charts
const Charts = () => import(/* webpackChunkName: "widgets" */ 'src/components/Dashboard/Views/Charts.vue')

// Example pages
const UserProfile = () => import('src/components/Dashboard/Views/Examples/UserProfile.vue');
// Role Management
const ListRolePage = () => import("src/components/Dashboard/Views/Examples/RoleManagement/ListRolePage.vue");
const AddRolePage = () => import ("src/components/Dashboard/Views/Examples/RoleManagement/AddRolePage.vue");
const EditRolePage = () => import ("src/components/Dashboard/Views/Examples/RoleManagement/EditRolePage.vue");
// // User Management
const ListUserPage = () => import("src/components/Dashboard/Views/Examples/UserManagement/ListUserPage.vue");
const AddUserPage = () => import ("src/components/Dashboard/Views/Examples/UserManagement/AddUserPage.vue");
const EditUserPage = () => import ("src/components/Dashboard/Views/Examples/UserManagement/EditUserPage.vue");
// // Category Management
const ListCategoryPage = () => import("src/components/Dashboard/Views/Examples/CategoryManagement/ListCategoryPage.vue");
const AddCategoryPage = () => import ("src/components/Dashboard/Views/Examples/CategoryManagement/AddCategoryPage.vue");
const EditCategoryPage = () => import ("src/components/Dashboard/Views/Examples/CategoryManagement/EditCategoryPage.vue");
// // Tag Management
const ListTagPage = () => import("src/components/Dashboard/Views/Examples/TagManagement/ListTagPage.vue");
const AddTagPage = () => import ("src/components/Dashboard/Views/Examples/TagManagement/AddTagPage.vue");
const EditTagPage = () => import ("src/components/Dashboard/Views/Examples/TagManagement/EditTagPage.vue");
// // Item Management
const ListItemPage = () => import("src/components/Dashboard/Views/Examples/ItemManagement/ListItemPage.vue");
const AddItemPage = () => import ("src/components/Dashboard/Views/Examples/ItemManagement/AddItemPage.vue");
const EditItemPage = () => import ("src/components/Dashboard/Views/Examples/ItemManagement/EditItemPage.vue");

let componentsMenu = {
  path: '/components',
  component: DashboardLayout,
  redirect: '/components/buttons',
  children: [
    {
      path: 'buttons',
      name: 'Buttons',
      component: Buttons
    },
    {
      path: 'grid-system',
      name: 'Grid System',
      component: GridSystem
    },
    {
      path: 'panels',
      name: 'Panels',
      component: Panels
    },
    {
      path: 'sweet-alert',
      name: 'Sweet Alert',
      component: SweetAlert
    },
    {
      path: 'notifications',
      name: 'Notifications',
      component: Notifications
    },
    {
      path: 'icons',
      name: 'Icons',
      component: Icons
    },
    {
      path: 'typography',
      name: 'Typography',
      component: Typography
    }

  ]
}
let formsMenu = {
  path: '/forms',
  component: DashboardLayout,
  redirect: '/forms/regular',
  children: [
    {
      path: 'regular',
      name: 'Regular Forms',
      component: RegularForms
    },
    {
      path: 'extended',
      name: 'Extended Forms',
      component: ExtendedForms
    },
    {
      path: 'validation',
      name: 'Validation Forms',
      component: ValidationForms
    },
    {
      path: 'wizard',
      name: 'Wizard',
      component: Wizard
    }
  ]
}

let tablesMenu = {
  path: '/table-list',
  component: DashboardLayout,
  redirect: '/table-list/regular',
  children: [
    {
      path: 'regular',
      name: 'Regular Tables',
      component: RegularTables
    },
    {
      path: 'extended',
      name: 'Extended Tables',
      component: ExtendedTables
    },
    {
      path: 'paginated',
      name: 'Paginated Tables',
      component: PaginatedTables
    }]
}

let mapsMenu = {
  path: '/maps',
  component: DashboardLayout,
  redirect: '/maps/google',
  children: [
    {
      path: 'google',
      name: 'Google Maps',
      component: GoogleMaps
    },
    {
      path: 'full-screen',
      name: 'Full Screen Map',
      component: FullScreenMap
    },
    {
      path: 'vector-map',
      name: 'Vector Map',
      component: VectorMaps
    }
  ]
}

let pagesMenu = {
  path: '/pages',
  component: DashboardLayout,
  redirect: '/pages/user',
  children: [
    {
      path: 'user',
      name: 'User Page',
      component: User
    },
    {
      path: 'timeline',
      name: 'Timeline Page',
      component: TimeLine
    }
  ]
}

let loginPage = {
  path: '/login',
  name: 'Login',
  component: Login,
  meta: { middleware: guest }
}

let registerPage = {
  path: '/register',
  name: 'Register',
  component: Register,
  meta: { middleware: guest }
}

let forgotPassword = {
  path: "/password/reset",
  name: "Password Reset",
  component: PasswordReset,
  meta: { middleware: guest }
}

let resetPassword = {
  path: "/password/email",
  name: "Password Reset",
  component: PasswordEmail,
  meta: { middleware: guest }
}

let lockPage = {
  path: '/lock',
  name: 'Lock',
  component: Lock
}

let examplesMenu = {
  path: "/examples",
  component: DashboardLayout,
  name: "Examples",
  children: [
    {
      path: "user-profile",
      name: "User Profile",
      components: { default: UserProfile },
      meta: { middleware: auth }
    },
    {
      path: "role-management/list-roles",
      name: "List Roles",
      components: { default: ListRolePage },
      meta: { middleware: admin }
    },
    {
      path: "role-management/add-role",
      name: "Add Role",
      components: { default: AddRolePage },
      meta: { middleware: admin }
    },
    {
      path: "role-management/edit-role/:id",
      name: "Edit Role",
      components: { default: EditRolePage },
      meta: { middleware: admin }
    },
    {
      path: "user-management/list-users",
      name: "List Users",
      components: { default: ListUserPage },
      meta: { middleware: admin }
    },
    {
      path: "user-management/add-user",
      name: "Add User",
      components: { default: AddUserPage },
      meta: { middleware: admin }
    },
    {
      path: "user-management/edit-user/:id",
      name: "Edit User",
      components: { default: EditUserPage },
      meta: { middleware: admin }
    },
    {
      path: "category-management/list-categories",
      name: "List Categories",
      components: { default: ListCategoryPage },
      meta: { middleware: admin_creator }
    },
    {
      path: "category-management/add-category",
      name: "Add Category",
      components: { default: AddCategoryPage },
      meta: { middleware: admin_creator }
    },
    {
      path: "category-management/edit-category/:id",
      name: "Edit Category",
      components: { default: EditCategoryPage },
      meta: { middleware: admin_creator }
    },
    {
      path: "tag-management/list-tags",
      name: "List Tags",
      components: { default: ListTagPage },
      meta: { middleware: auth }
    },
    {
      path: "tag-management/add-tag",
      name: "Add Tag",
      components: { default: AddTagPage },
      meta: { middleware: auth }
    },
    {
      path: "tag-management/edit-tag/:id",
      name: "Edit Tag",
      components: { default: EditTagPage },
      meta: { middleware: auth }
    },
    {
      path: "item-management/list-items",
      name: "List Items",
      components: { default: ListItemPage },
      meta: { middleware: auth }
    },
    {
      path: "item-management/add-item",
      name: "Add Item",
      components: { default: AddItemPage },
      meta: { middleware: auth }
    },
    {
      path: "item-management/edit-item/:id",
      name: "Edit Item",
      components: { default: EditItemPage },
      meta: { middleware: auth }
    },
  ]
};

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'calendar',
        name: 'Calendar',
        component: Calendar
      },
      {
        path: 'charts',
        name: 'Charts',
        component: Charts
      }
    ]
  },
  componentsMenu,
  formsMenu,
  tablesMenu,
  mapsMenu,
  pagesMenu,
  loginPage,
  registerPage,
  lockPage,
  resetPassword,
  forgotPassword,
  examplesMenu,
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    meta: { middleware: auth },
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview,
        meta: { middleware: auth },
      },
      {
        path: 'widgets',
        name: 'Widgets',
        component: Widgets,
        meta: { middleware: auth },
      }
    ]
  },
  {path: '*', component: NotFound}
];

export default routes
