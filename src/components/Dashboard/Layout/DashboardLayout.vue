<template>
  <div class="wrapper">
    <side-bar
      :active-color="activeColor"
      :background-color="backgroundColor"
      type="sidebar"
    >
      <user-menu></user-menu>
      <template slot-scope="props" slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'nc-icon nc-bank',
            path: '/admin/overview',
          }"
        >
        </sidebar-item>
        <sidebar-item
          v-if="roles"
          opened
          class="example"
          :link="{ name: 'Examples (API)', icon: 'fab fa-vuejs fa-2x' }"
        >
          <sidebar-item
            v-if="roles.includes('admin')"
            :link="{
              name: 'Role Management',
              path: '/examples/role-management/list-roles',
            }"
          />
          <sidebar-item
            v-if="roles.includes('admin')"
            :link="{
              name: 'User Management',
              path: '/examples/user-management/list-users',
            }"
          />
          <sidebar-item
            v-if="roles.includes('admin') || roles.includes('creator')"
            :link="{
              name: 'Category Management',
              path: '/examples/category-management/list-categories',
            }"
          />
          <sidebar-item
            v-if="roles.includes('admin') || roles.includes('creator')"
            :link="{
              name: 'Tag Management',
              path: '/examples/tag-management/list-tags',
            }"
          />
          <sidebar-item
            :link="{
              name: 'Item Management',
              path: '/examples/item-management/list-items',
            }"
          />
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'Components',
            icon: 'nc-icon nc-layout-11',
          }"
        >
          <sidebar-item
            :link="{
              name: 'Buttons',
              path: '/components/buttons',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Grid System',
              path: '/components/grid-system',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Panels',
              path: '/components/panels',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Sweet Alert',
              path: '/components/sweet-alert',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Notifications',
              path: '/components/notifications',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Icons',
              path: '/components/icons',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Typography',
              path: '/components/typography',
            }"
          >
          </sidebar-item>
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'Forms',
            icon: 'nc-icon nc-ruler-pencil',
          }"
        >
          <sidebar-item
            :link="{
              name: 'Regular Forms',
              path: '/forms/regular',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Extended Forms',
              path: '/forms/extended',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Validation Forms',
              path: '/forms/validation',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Wizard',
              path: '/forms/wizard',
            }"
          >
          </sidebar-item>
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'Table List',
            icon: 'nc-icon nc-single-copy-04',
          }"
        >
          <sidebar-item
            :link="{
              name: 'Regular Tables',
              path: '/table-list/regular',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Extended Tables',
              path: '/table-list/extended',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Paginated Tables',
              path: '/table-list/paginated',
            }"
          >
          </sidebar-item>
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'Maps',
            icon: 'nc-icon nc-pin-3',
          }"
        >
          <sidebar-item
            :link="{
              name: 'Google Maps',
              path: '/maps/google',
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: 'Full Screen Maps',
              path: '/maps/full-screen',
            }"
          >
          </sidebar-item>
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'Widgets',
            icon: 'nc-icon nc-box',
            path: '/admin/widgets',
          }"
        >
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'Charts',
            icon: 'nc-icon nc-chart-bar-32',
            path: '/charts',
          }"
        >
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'Calendar',
            icon: 'nc-icon nc-calendar-60',
            path: '/calendar',
          }"
        >
        </sidebar-item>
      </template>
    </side-bar>
    <sidebar-share
      :background-color.sync="backgroundColor"
      :active-color.sync="activeColor"
    >
    </sidebar-share>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar"> </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import UserMenu from "src/components/UIComponents/SidebarPlugin/UserMenu.vue";
import Vuex from "vuex";
import SidebarItem from "../../UIComponents/SidebarPlugin/SidebarItem.vue";
import SidebarShare from "./SidebarSharePlugin";

export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    UserMenu,
    SidebarItem,
    SidebarShare,
  },
  data() {
    return {
      roles: [],
      backgroundColor: "black",
      activeColor: "success",
    };
  },
  computed: {
    ...Vuex.mapState({
      me: (state) => state.profile.me,
    }),
  },
  mounted() {
    this.$store.dispatch("profile/me");
  },
  watch: {
    me: {
      handler: function (val) {
        this.roles = val.roles.map((r) => r.name);
      },
      deep: true,
    },
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
