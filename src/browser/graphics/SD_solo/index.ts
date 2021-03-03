/* eslint no-new: off, @typescript-eslint/explicit-function-return-type: off */

import Vue from 'vue';
import store from '../../plugin/store';
import vuetify from '../../plugin/vuetify';
import View from '../views/SdGameView.vue';

new Vue({
  store,
  vuetify,
  el: '#app',
  render: (h) => h(View, {
    props: {
      clipPaths: [
        {
          x: 720,
          y: 1,
          width: 1200,
          height: 900,
        }
      ]
    }
  }),
});