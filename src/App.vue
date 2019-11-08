<template>
  <div>
    <v-containe>
      <v-toolbar>
        <v-toolbar-title>
          <v-img src="./assets/apg.png"></v-img>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-xs-only">
          <v-btn flat v-for="item in menuItems" :key="item.title" router :to="item.link" style>
            <!-- <v-icon left>{{item.icon}}</v-icon> -->
            {{item.title}}
          </v-btn>
          <v-btn to="/" flat v-if="userIsAuthenticated" @click="onLogout">
            <v-icon left>exit_to_app</v-icon>Logout
          </v-btn>
        </v-toolbar-items>

        <template v-if="$vuetify.breakpoint.smAndUp">
          <v-btn icon>
            <v-icon>mdi-export-variant</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-delete-circle</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-plus-circle</v-icon>
          </v-btn>
        </template>
      </v-toolbar>
    </v-containe>
  </div>
</template>

<script>
export default {
  // name: 'App',
  data() {
    return {
      sideNav: false
    };
  },
  computed: {
    menuItems() {
      let menuItems = [
        { title: "sign in", link: "/signin" },
        { title: "sign up", link: "/signup" }
      ];
      if (this.userIsAuthenticated) {
        menuItems = [
          { icon: "home", title: "how it works", link: "/" },
          { icon: "shop", title: "tournaments", link: "/tournaments" },
          { icon: "shop", title: "create", link: "/tournament/new" },
          { icon: "home", title: "Profile", link: "/profile" }
        ];
      } else if (this.userIsAuthenticated && this.userIsAdmin) {
        menuItems = [
          { icon: "home", title: "how it works", link: "/" },
          { icon: "shop", title: "tournaments", link: "/tournaments" },
          { icon: "home", title: "Profile", link: "/profile" }
        ];
      }
      return menuItems;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
    userIsAdmin() {
      return this.$store.getters.userRight;
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>
<style>
</style>