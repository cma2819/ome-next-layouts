<template>
  <div
    :style="{
      width: '100%',
      height: '100%',
      color: nodecgTheme.text,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    }"
  >
    <div
      :style="{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        width: '100%',
        height: '143px',
        padding: '16px',
      }"
    >
      <transition
        name="social"
        mode="out-in"
      >
        <div
          v-if="displaySocial === 0 && social.twitch"
          key="twitch"
          class="account"
        >
          <span class="icon">
            <i class="fab fa-twitch" />
          </span>
          <span>{{ social.twitch }}</span>
        </div>
        <div
          v-else-if="displaySocial === 1 && social.nico"
          key="nico"
          class="account"
        >
          <span>{{ social.nico }}</span>
        </div>
        <div
          v-else-if="displaySocial === 2 && social.youtube"
          key="youtube"
          class="account"
        >
          <span class="icon">
            <i class="fab fa-youtube" />
          </span>
          <span>{{ social.youtube }}</span>
        </div>
        <div
          v-else-if="displaySocial === 3 && social.twitter"
          key="twitter"
          class="account"
        >
          <span class="icon">
            <i class="fab fa-twitter" />
          </span>
          <span>{{ social.twitter }}</span>
        </div>
        <div
          v-else
          key="blank"
          class="account"
        >
          <span />
        </div>
      </transition>
      <div class="name">
        {{ name }}
      </div>
      <span
        class="label"
        :style="{
          color: nodecgTheme.secondary
        }"
      >{{ isRunner ? 'Runner': 'Commentator' }}</span>
    </div>
  </div>
</template>

<style scoped>
  .social-enter-active {
    transition: all 1s 1s;
  }

  .social-leave-active {
    transition: all 1s;
  }

  .social-enter, .social-leave-to {
    transform: translateX(-20px);
    opacity: 0;
  }
  .account {
    font: normal normal normal 28px Ubuntu Mono;
  }
  .name {
    font: normal normal normal 40px Noto Sans JP;
    padding-left: 16px;
  }
  .label {
    font: normal normal normal 32px/24px Ubuntu Mono;
    padding-left: 16px;
  }
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Social } from './types';

import ShortNameplateBg from '../../components/BackGround/ShortNameplateBgComponent.vue';
import { theme } from '../../../plugin/theme';

@Component({
  components: {
    ShortNameplateBg,
  }
})
export default class Nameplate extends Vue {
  @Prop(Number)
  readonly displaySocial!: number;
  @Prop(String)
  readonly name!: string;
  @Prop(Boolean)
  readonly isRunner!: boolean;
  @Prop(Object)
  readonly social!: Social

  get nodecgTheme() {
    return theme;
  }
}
</script>
