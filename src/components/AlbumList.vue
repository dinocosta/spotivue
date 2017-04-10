<template>
  <v-row v-if="albums">
    <v-col xs12>
      <template v-for="album in albums">
        <v-card horizontal v-if="album.album_type != 'single'" @click.native="alertUser">
          <v-card-row v-bind:img="album.images[0].url" height="120px"></v-card-row>
          <v-card-text>
            {{ album.artists[0].name }}
            <br>
            {{ album.name }}
            <br>
            <a v-bind:href="album.uri">Listen on Spotify</a>
            <br>
            <router-link :to="{ path: `album/${album.id}`}">Song List</router-link>
          </v-card-text>
        </v-card>
        <br>
      </template>
    </v-col>
  </v-row>
</template>

<script>
const url = 'http://api.spotify.com/v1/artists';

export default {
  name: 'album-list',
  props: ['artistID'],
  data() {
    return {
      albums: null,
    };
  },
  watch: {
    artistID() {
      this.$http.get(`${url}/${this.artistID}/albums`).then((data) => {
        this.albums = data.body.items;
      }, () => {
        this.albums = null;
      });
    },
  },
};
</script>
