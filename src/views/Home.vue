<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm4 @click="clickMethod(home)">
          <v-card color="rgb(0, 0, 0, 0.0)">
            <v-img class="home-image" :src="require('./../assets/logo-main-m.png')"></v-img>
          </v-card>
        </v-flex>

        <v-flex xs12 sm4 @click="clickMethod(programs)">
          <v-card color="rgb(0, 0, 0, 0.0)">
            <v-img class="home-image" :src="require('./../assets/logo-main-saba.png')"></v-img>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 @click="clickMethod(about)">
          <v-card>
            <v-img class="home-image" :src="require('./../assets/logo-main-jag.png')"></v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
</script>
<style  scoped>
.home-image {
  max-width: 100%;
  height: auto;
  position: relative;
  opacity: 0.4;
}

.v-card:hover > .home-image {
  opacity: 1;
}

.image-text {
  position: relative;
  color: black;
  font-weight: bold;
  text-align: center;
  /* margin-top: 180px; */
}
</style>
