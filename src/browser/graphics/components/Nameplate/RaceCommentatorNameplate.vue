<template>
  <div
    :class="{
      right: isRight
    }"
    :style="{
      width: '100%',
      height: '100%',
      color: nodecgTheme.text,
    }"
  >
      <div
        :style="{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          width: '100%',
          height: '92px',
          padding: '0 24px',
          marginBottom: '-6px'
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
          </div>
        </transition>
        <div class="name">
          {{ name }}
        </div>
      </div>
      <straight-nameplate-bg></straight-nameplate-bg>
    <div
      class="label"
      :style="{
        color: nodecgTheme.secondary,
        marginTop: '-8px',
      }"
    >
      Commentator
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
    font: normal normal normal 40px Source Han Sans JP;
  }
  .label {
    font: normal normal normal 32px Ubuntu Mono;
    text-align: center;
  }
  .bg {
    padding: 0 48px 16px 16px;
  }
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Social } from './types';

import StraightNameplateBg from '../../components/BackGround/StraightNameplateBgComponent.vue';
import { theme } from '../../../plugin/theme';

@Component({
  components: {
    StraightNameplateBg,
  }
})
export default class RaceCommentatorNameplate extends Vue {
  @Prop(Number)
  readonly displaySocial!: number;
  @Prop(String)
  readonly name!: string;
  @Prop(Boolean)
  readonly isRunner!: boolean;
  @Prop(Object)
  readonly social!: Social
  @Prop({ default: false})
  readonly isRight!: boolean;
  @Prop(String)
  readonly time!: string;

  get nodecgTheme() {
    return theme;
  }
}
</script>
