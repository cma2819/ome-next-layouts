/* eslint no-new: off, @typescript-eslint/explicit-function-return-type: off */

import Vue from 'vue';
import store from '../../plugin/store';
import vuetify from '../../plugin/vuetify';
import View from '../views/HdGameView.vue';

new Vue({
  store,
  vuetify,
  el: '#app',
  render: (h) => h(View, {
    props: {
      clipPaths: [
        {
          x: 529,
          y: 0,
          width: 1360,
          height: 765,
        }
      ]
    }
  }),
});