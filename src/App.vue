<template>
  <div>
    <v-toolbar app flat>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title data-app>
        <v-img src="./assets/apg.png"></v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu
          class="hidden-md-and-up"
          offset-y
          open-on-click
          open-on-hover
          v-for="(item,index) in menuItems"
          :key="index"
        >
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
        {
          title: "Supply Chain",
          subItems: [
            { title: "Supply Chain Team", link: "/SCT" },
            { title: "Global Sourcing", link: "/GlobalSourcing" },
            { title: "CP Calendar/Process", link: "/CP" },
            { title: "Quality Assurance", link: "/QA" },
            { title: "Logistics", link: "/logistics" },
            { title: "Digital Operations", link: "/DO" },
            { title: "Monthly Updates", link: "/updates" },
            { title: "Strategy Connect", link: "/StrategyConnect" }
          ],
          link: "/SupplyChain"
        },
        {
          title: "Finance",
          subItems: [
            { title: "Finance team", link: "/teams/finance" },
            { title: "Policies and Procedures", link: "/policies/finance" },
            { title: "Finance Forms", link: "/forms/finance" },
            { title: "Costing Sheets", link: "/finance/sheets" },
            { title: "Strategy Connect", link: "/StrategyConnect" }
          ],
          link: "/Finance"
        },
        {
          title: "IT",
          subItems: [
            { title: "The Team", link: "/teams/finance" },
            { title: "Change Form", link: "/policies/finance" },
            { title: "New User Form (HR Only)", link: "/forms/IT/New_User" },
            { title: "Terminated User Form", link: "/forms/IT/terminate_User" },
            { title: "Policies and Procedures", link: "/policies/IT" },
            { title: "Servicedesk", link: "/IT/Service_Desk" },
            { title: "IT Training Manuals", link: "/IT/Manual" },
            {
              title: "SSPR (Self-Service Password Reset)",
              link: "/IT/password_reset"
            },
            { title: "POS Monitor", link: "/IT/POS_monitor" },
            { title: "CONC Monitor", link: "/IT/CONS_monitor" },
            { title: "Willow Monitor", link: "/IT/willow_monitor" },
            {
              title: "Applications",
              link: "/IT?apps"
            },
            { title: "Strategy Connect", link: "/StrategyConnect" },
            { title: "Store Number Requisition", link: "/IT/store_number" }
          ],
          link: "/IT"
        },
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