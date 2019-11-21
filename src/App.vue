<template>
  <div>
    <v-toolbar>
      <v-toolbar-title data-app>
        <v-img src="./assets/apg.png"></v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <v-menu offset-y open-on-click open-on-hover v-for="(item,index) in menuItems" :key="index">
          <template v-slot:activator="{ on }">
            <v-btn text color="primary" v-on="on">{{item.title}}</v-btn>
          </template>

          <v-list v-for="(item,index) in menuItems[index].subItems" :key="index">
            <v-list-item :to="item.link">
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
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
        {
          title: "Admin",
          subItems: [
            { title: "Admin", link: "/admin" },
            { title: "APG & Co Team", link: "APGTeam" },
            { title: "APG Values", link: "/Values" },
            { title: "APG Corp Video", link: "/videos" }
          ],
          link: "/signin"
        },
        {
          title: "Product",
          subItems: [
            { title: "Sportscraft Team", link: "/SCTeam" },
            { title: "SABA Team", link: "/SBTeam" },
            { title: "Strategy Connect", link: "/StrategyConnect" }
          ],
          link: "/Product"
        },
        {
          title: "JAG",
          subItems: [{ title: "JAG Team", link: "/JAGTeam" }],
          link: "/JAG"
        },
        {
          title: "HR",
          subItems: [
            { title: "APG Values", link: "/Values" },
            { title: "HR Team", link: "/HRTeam" },
            { title: "Lets Talk Performance", link: "/performace" },
            { title: "Org Charts", link: "/orgCharts" },
            { title: "Policies & Procedures", link: "/policies" },
            { title: "WHS", link: "/WHS" },
            { title: "HR Forms", link: "/HR/Forms" },
            { title: "WHS Forms", link: "/WHS/Forms" },
            { title: "Strategy Connect", link: "/StrategyConnect" }
          ],
          link: "/HR"
        },
        { title: "Supply Chain", link: "/SupplyChain" },
        { title: "Finance", link: "/Finance" },
        { title: "IT", link: "/IT" },
        { title: "Private Label", link: "/PrivateLabel" },
        { title: "Shanghai/Vietnam", link: "/ShanghaiVietnam" },
        { title: "Qlikview", link: "/Qlikview" },
        { title: "Applications", link: "/Application" },
        { title: "APG Learning", link: "/APGLearning" }
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
    },
    test() {
      print("This worked");
    }
  }
};
</script>
<style>
</style>