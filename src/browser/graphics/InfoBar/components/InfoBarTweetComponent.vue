<template>
  <div
    :style="{
      color: nodecgTheme.text,
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }"
  >
    <div
      :style="{
        font: 'normal normal normal 24px \'Ubuntu Mono\'',
        flexGrow: '1',
      }"
    >
      @{{ tweet.screenName }}
    </div>
    <div
      :style="{
        font: 'normal normal normal 24px \'Ubuntu Mono\'',
        flexGrow: '2',
        justifyContent: 'center',
      }"
    >
      {{ tweet.text }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ActiveTweet } from '../../../../nodecg/external/nodecg-twitter-widget/activeTweet';
import { theme } from '../../../plugin/theme';

@Component
export default class InfoBarTweet extends Vue {
  @Prop(Object)
  readonly tweet!: ActiveTweet;

  get nodecgTheme() {
    return theme;
  }
}
</script>