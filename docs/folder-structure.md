## Folder Structure

This is the main project structure.
We will go over some of the main project folders below.

```
├───vue-paper-dashboard-pro
│   App.vue
│   main.js
│   polyfills.js
│
├───assets
│   ├───css
│   │   │   style.css
│   │   │
│   │   └───nucleo
│   └───sass
│       │
│       ├───core
│       └───custom
├───axios
│       index.js
│
├───components
|    ├── Dashboard
|    │   ├── Layout
|    │   │   ├── ContentFooter.vue
|    │   │   ├── Content.vue
|    │   │   ├── DashboardLayout.vue
|    │   │   ├── LoadingMainPanel.vue
|    │   │   └── TopNavbar.vue
|    │   └── Views
|    │       ├── Calendar
|    │       │   ├── CalendarRoute.vue
|    │       │   └── Calendar.vue
|    │       ├── Charts.vue
|    │       ├── Components
|    │       │   ├── Buttons.vue
|    │       │   ├── GridSystem.vue
|    │       │   ├── Icons.vue
|    │       │   ├── Notifications.vue
|    │       │   ├── NotificationTemplate.vue
|    │       │   ├── Panels.vue
|    │       │   ├── SweetAlert.vue
|    │       │   └── Typography.vue
|    │       ├── Dashboard
|    │       │   ├── Overview.vue
|    │       │   ├── Widgets
|    │       │   │   ├── TaskList.vue
|    │       │   │   └── Task.vue
|    │       │   └── Widgets.vue
|    │       ├── Examples
|    │       │   ├── CategoryManagement
|    │       │   │   ├── AddCategoryPage.vue
|    │       │   │   ├── EditCategoryPage.vue
|    │       │   │   └── ListCategoryPage.vue
|    │       │   ├── ItemManagement
|    │       │   │   ├── AddItemPage.vue
|    │       │   │   ├── EditItemPage.vue
|    │       │   │   └── ListItemPage.vue
|    │       │   ├── RoleManagement
|    │       │   │   ├── AddRolePage.vue
|    │       │   │   ├── EditRolePage.vue
|    │       │   │   └── ListRolePage.vue
|    │       │   ├── TagManagement
|    │       │   │   ├── AddTagPage.vue
|    │       │   │   ├── EditTagPage.vue
|    │       │   │   └── ListTagPage.vue
|    │       │   ├── UserManagement
|    │       │   │   ├── AddUserPage.vue
|    │       │   │   ├── EditUserPage.vue
|    │       │   │   └── ListUserPage.vue
|    │       │   ├── UserProfile
|    │       │   │   ├── EditPasswordCard.vue
|    │       │   │   └── EditProfileCard.vue
|    │       │   └── UserProfile.vue
|    │       ├── Forms
|    │       │   ├── ExtendedForms.vue
|    │       │   ├── RegularForms.vue
|    │       │   ├── ValidationForms
|    │       │   │   ├── LoginForm.vue
|    │       │   │   ├── RegisterForm.vue
|    │       │   │   └── TypeValidationForm.vue
|    │       │   ├── ValidationForms.vue
|    │       │   ├── Wizard
|    │       │   │   ├── FirstStep.vue
|    │       │   │   ├── SecondStep.vue
|    │       │   │   └── ThirdStep.vue
|    │       │   └── Wizard.vue
|    │       ├── Maps
|    │       │   ├── API_KEY.js
|    │       │   ├── FullScreenMap.vue
|    │       │   ├── GoogleMaps.vue
|    │       │   ├── VectorMapsPage.vue
|    │       │   ├── VectorMaps.vue
|    │       │   └── WorldMap.vue
|    │       ├── Pages
|    │       │   ├── Layout
|    │       │   │   ├── AppFooter.vue
|    │       │   │   └── AppNavbar.vue
|    │       │   ├── Lock.vue
|    │       │   ├── Login.vue
|    │       │   ├── Register.vue
|    │       │   ├── TimeLinePage.vue
|    │       │   ├── UserProfile
|    │       │   │   ├── EditProfileForm.vue
|    │       │   │   ├── MembersCard.vue
|    │       │   │   └── UserCard.vue
|    │       │   └── UserProfile.vue
|    │       └── Tables
|    │           ├── ExtendedTables.vue
|    │           ├── PaginatedTables.vue
|    │           ├── RegularTables.vue
|    │           └── users.js
|    ├── GeneralViews
|    │   └── NotFoundPage.vue
|    └── UIComponents
|        ├── Badge.vue
|        ├── Button.vue
|        ├── Cards
|        │   ├── Card.vue
|        │   ├── ChartCard.vue
|        │   ├── CircleChartCard.vue
|        │   └── StatsCard.vue
|        ├── Charts
|        │   ├── BarChart.js
|        │   ├── DoughnutChart.js
|        │   ├── LineChart.js
|        │   ├── mixins
|        │   │   └── reactiveChart.js
|        │   ├── PieChart.js
|        │   ├── plugins
|        │   │   └── plugin-chart-text.js
|        │   └── utils.js
|        ├── Collapse
|        │   ├── CollapseItem.vue
|        │   └── Collapse.vue
|        ├── Dropdown.vue
|        ├── index.js
|        ├── InfoSection.vue
|        ├── Inputs
|        │   ├── Checkbox.vue
|        │   ├── formGroupInput.vue
|        │   ├── IconCheckbox.vue
|        │   └── Radio.vue
|        ├── Modal.vue
|        ├── Navbar
|        │   ├── NavbarToggleButton.vue
|        │   └── Navbar.vue
|        ├── Pagination.vue
|        ├── Progress.vue
|        ├── SidebarPlugin
|        │   ├── index.js
|        │   ├── SidebarItem.vue
|        │   ├── SideBar.vue
|        │   └── UserMenu.vue
|        ├── Switch.vue
|        ├── Tabs
|        │   ├── PillsLayout.vue
|        │   ├── TabsLayout.vue
|        │   ├── Tabs.vue
|        │   └── Tab.vue
|        ├── TimeLine
|        │   ├── TimeLineItem.vue
|        │   └── TimeLine.vue
|        ├── ValidationError.vue
|        └── Wizard
|            ├── WizardTab.vue
|            └── Wizard.vue
│
├───middleware
│       admin.js
│       admin_creator.js
│       auth.js
│       guest.js
│
├───mixins
│       form-mixin.js
│
├───plugins
│       dashboard-plugin.js
│       globalComponents.js
│       globalDirectives.js
│
├───router
│       index.js
│       routes.js
│       starterRouter.js
│
├───store
│   │   index.js
│   │
│   ├───modules
│   │       auth.js
│   │       categories-module.js
│   │       items-module.js
│   │       profile-module.js
│   │       reset.js
│   │       roles-module.js
│   │       tags-module.js
│   │       users-module.js
│   │
│   └───services
│           categories-service.js
│           items-service.js
│           profile-service.js
│           roles-service.js
│           tags-service.js
│           users-service.js
│
├───util
│       throttle.js
```


### **public** folder

Here you will find static assets and the `index.html` file which is the starting point of our app.

### **src** folder

Is the main project folder. Here you will find a couple of sub directories and some initialization files.

### **src/assets** folder

Contains main asset files such as fonts and sass. This folder contains all the css from the template.
Inside you will find small sass files for components, layout and various variables for colors which you can
change anc configure yourself depending on your needs.

### **src/components** folder

Here you will find all vue related components & pages. The **UIComponents** sub folder contains all
re-usable components while the **Dashboard** sub folder contains all demo pages from the dashboard template.

### **src/routes** folder

Contains all vue-router declared routes, routes structure and names.
You will most likely delete the route declarations here so you can add your own routes.

### **main.js** file

Is the entry point of our dashboard template. Here, you will find various plugin declarations, global components
and global asset imports.
