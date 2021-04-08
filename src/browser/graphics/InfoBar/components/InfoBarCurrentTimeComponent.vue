<template>
  <div :style="{
    color: nodecgTheme.text,
    width: '100%',
    height: '100%',
    padding: '0 30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: 'normal normal bold 64px \'Ubuntu Mono\''
  }">
    {{ timeString }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { bundleNodecg } from '../../../plugin/nodecg';
import { theme } from '../../../plugin/theme';

@Component
export default class InfoBarCurrentTime extends Vue {
  currentTime = '';

  created(): void {
    bundleNodecg.Replicant('current-datetime').on('change', (newVal) => {
      this.currentTime = newVal.time;
    });
  }

  get timeString(): string {
    return this.currentTime;
  }

  get nodecgTheme() {
    return theme;
  }
}
</script>