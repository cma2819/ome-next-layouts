/* eslint no-new: off, @typescript-eslint/explicit-function-return-type: off */

import Vue from 'vue';
import store from '../../plugin/store';
import vuetify from '../../plugin/vuetify';
import View from '../views/DsGameView.vue';

new Vue({
  store,
  vuetify,
  el: '#app',
  render: (h) => h(View, {
    props: {
      clipPaths: [
        {
          x: 638,
          y: 0,
          width: 1265,
          height: 759,
        },
        {
          x: 0,
          y: 444,
          width: 620,
          height: 465,
        },
      ]
    }
  }),
});