<template>
  <div
    :style="{
      height: '150px',
      width: '1920px',
      backgroundColor: nodecgTheme.primary
    }"
  >
    <div
      :style="{
        position: 'absolute',
        left: '0px',
        height: '150px',
        width: '250px',
        padding: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.3)'
      }"
    >
      <info-bar-logo></info-bar-logo>
    </div>
    <div
      :style="{
        position: 'absolute',
        left: '250px',
        height: '150px',
        width: '1450px',
        padding: '8px 32px'
      }"
    >
      <transition
        name="tweet"
        mode="out-in"
      >
        <info-bar-tweet
          v-if="tweet"
          :tweet="tweet"
          key="tweet"
        ></info-bar-tweet>
        <info-bar-hash-tag
          v-else
          key="tag"
        ></info-bar-hash-tag>
      </transition>
    </div>
    <div
      :style="{
        position: 'absolute',
        right: '0px',
        height: '150px',
        width: '220px',
      }"
    >
      <info-bar-current-time></info-bar-current-time>
    </div>
  </div>
</template>

<style scoped>
.tweet-enter-active, .tweet-leave-active {
  transition: all 1s;
}
.tweet-enter, .tweet-leave-to {
  opacity: 0;
  transform: translateX(25px);
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import InfoBarLogo from './components/InfoBarLogoComponent.vue';
import InfoBarHashTag from './components/InfoBarHashTagComponent.vue';
import InfoBarCurrentTime from './components/InfoBarCurrentTimeComponent.vue';
import InfoBarTweet from './components/InfoBarTweetComponent.vue';
import { theme } from '../../plugin/theme';
import { twitterNodecg } from '../../plugin/nodecg';
import { ActiveTweet } from '../../../nodecg/external/nodecg-twitter-widget/activeTweet';

@Component({
  components: {
    InfoBarLogo,
    InfoBarHashTag,
    InfoBarCurrentTime,
    InfoBarTweet,
  }
})
export default class App extends Vue {
  tweet: ActiveTweet|null = null;

  get nodecgTheme() {
    return theme;
  }

  created(): void {
    twitterNodecg.Replicant('activeTweet', 'nodecg-twitter-widget').on('change', (newVal) => {
      this.tweet = newVal;
    })
  }
}
</script>