<template>
  <p>{{ this.$route.params.id }}</p>
</template>

<script>
// const url = 'http://api.spotify.com/v1/albums';

export default {
  name: 'song-list',
  props: ['albumID'],
  data() {
    return {
      tracks: null,
    };
  },
  watch: {
    $route() {
      console.log(this.$route.params.id);
    },
  },
};
</script>
