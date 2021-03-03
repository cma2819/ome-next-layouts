<template>
  <div
    id="root"
  >
    <slot></slot>
    <clipped-canvas
      v-if="backgroundUri"
      :background-image="backgroundUri"
      :clip-paths="clipPaths"
    ></clipped-canvas>
  </div>
</template>

<style>
html {
  overflow: hidden;
}
#root {
  margin: 0;
  width: 1920px;
  height: 930px;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import ClippedCanvas from '../components/ClippedCanvas/ClippedCanvas.vue';
import { ClipPath } from '../components/ClippedCanvas/types';
import { bundleNodecg } from '../../plugin/nodecg';
import { gameViewModule } from '../_lib/gameViewModule';

@Component({
  components: {
    ClippedCanvas,
  }
})
export default class GameView extends Vue {

  @Prop(Array)
  readonly clipPaths!: ClipPath[]

  backgroundUri = '';

  created(): void {
    bundleNodecg.Replicant('assets:background').on('change', (newVal) => {
      if (newVal.length > 0) {
        this.backgroundUri = newVal[0].url;
      }
    });

    setInterval(() => {
      gameViewModule.nextSocial();
    }, 20000)
  }
}
</script>
