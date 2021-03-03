/* eslint no-new: off, @typescript-eslint/explicit-function-return-type: off */

import Vue from 'vue';
import store from '../../plugin/store';
import vuetify from '../../plugin/vuetify';
import View from '../views/RaceGameView.vue';

new Vue({
  store,
  vuetify,
  el: '#app',
  render: (h) => h(View, {
    props: {
      clipPaths: [
        {
          x: 0,
          y: 135,
          width: 960,
          height: 540,
        },
        {
          x: 960,
          y: 135,
          width: 960,
          height: 540,
        },
      ]
    }
  }),
});