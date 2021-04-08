<template>
  <div
    :class="{
      right: isRight
    }"
    :style="{
      width: '100%',
      height: '100%',
      color: nodecgTheme.text,
      backgroundColor: 'rgba(0, 0, 0, 0.6)'
    }"
  >
    <div
      class="label"
      :style="{
        color: nodecgTheme.secondary,
      }"
    >
      {{ isRunner ? 'Runner': 'Commentator' }}
    </div>
    <div
      :style="{
        position: 'relative',
        marginTop: '8px',
      }"
    >
      <div
        v-if="!isRight"
        class="bg"
        :style="{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          width: '100%',
          height: '65px'
        }"
      >
        <div
          class="info"
          :style="{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            font: 'normal normal normal 32px \'Ubuntu Mono\'',
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
            />
          </transition>
          <div
            :style="{
              color: nodecgTheme.timer.finish,
            }"
          >
            {{ time }}
          </div>
        </div>
        <div class="name">
          {{ name }}
        </div>
      </div>
      <div
        v-else
        class="bg"
        :style="{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          width: '100%',
          height: '65px'
        }"
      >
        <div
          class="info"
          :style="{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            font: 'normal normal normal 32px \'Ubuntu Mono\'',
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
            />
          </transition>
          <div
            :style="{
              color: nodecgTheme.timer.finish,
            }"
          >
            {{ time }}
          </div>
        </div>
        <div class="name">
          {{ name }}
        </div>
      </div>
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
  }
  .label {
    font: normal normal normal 32px Ubuntu Mono;
    padding-right: 16px;
    text-align: right;
  }
  .right .label {
    padding-left: 16px;
    text-align: left;
  }
  .bg {
    padding: 16px 32px;
  }
  .info {
    height: 64px;
  }
  .right .info {
    align-items: flex-end;
  }
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Social } from './types';

import LongNameplateBg from '../../components/BackGround/LongNameplateBgComponent.vue';
import LongNameplateBgReversed from '../../components/BackGround/LongNameplateBgReversedComponent.vue';
import { theme } from '../../../plugin/theme';

@Component({
  components: {
    LongNameplateBg,
    LongNameplateBgReversed,
  }
})
export default class RaceNameplate extends Vue {
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

  created(): void {
    console.log(this.nodecgTheme);
  }

  get nodecgTheme() {
    return theme;
  }

  get timerColor() {
    return theme.timer.finish;
  }
}
</script>
