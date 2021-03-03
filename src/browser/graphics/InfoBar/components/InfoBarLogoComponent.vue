<template>
  <div :style="{
    backgroundImage: logoUri ? `url(${logoUri})` : '',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: '100%',
    height: '100%',
  }" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Asset } from '../../../../nodecg/asset';

/* global nodecg */
@Component
export default class InfoBarLogo extends Vue {
  logoAsset: Asset|null = null;

  created(): void {
    nodecg.Replicant('assets:logo').on('change', (newVal) => {
      if (newVal.length > 0) {
        this.logoAsset = newVal[0];
      } else {
        this.logoAsset = null;
      }
    });
  }

  get logoUri(): string {
    return this.logoAsset ? this.logoAsset.url : '';
  }
}
</script>