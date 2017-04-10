<template>
  <div id="app">
    <v-container class="container">
      <v-row>
        <h2>Spotivue</h2>
      </v-row>

      <v-row>
        <v-col xs12>
          <v-text-field label="Spotify Artist ID" v-model="artistID"></v-text-field>
        </v-col>
      </v-row>

      <router-view :artistID="artistID"></router-view>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      artistID: null,
    };
  },
  watch: {
    artistID() {
      if (this.$route.path !== '/') {
        this.$router.push('/');
      }
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
