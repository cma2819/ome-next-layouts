<template>
  <div
    :style="{
      color: nodecgTheme.text,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'normal normal normal 64px \'Ubuntu Mono\''
    }"
  >
    {{ hashTag }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { bundleNodecg } from '../../../plugin/nodecg';
import { theme } from '../../../plugin/theme';

@Component
export default class InfoBarHashTag extends Vue {
  hashTag = '';

  created(): void {
    this.hashTag = bundleNodecg.bundleConfig.event?.hashTag || '#OnlineMarathonEventers';
  }

  get nodecgTheme() {
    return theme;
  }
}
</script>