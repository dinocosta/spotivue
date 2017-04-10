import Vue from 'vue';
import Router from 'vue-router';
import SongList from '@/components/SongList';
import AlbumList from '@/components/AlbumList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AlbumList',
      component: AlbumList,
    },
    {
      path: '/album/:id',
      name: 'SongList',
      component: SongList,
    },
  ],
});
