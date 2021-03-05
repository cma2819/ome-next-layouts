<template>
  <game-view :clip-paths="clipPaths">
    <div class="games">
      <run-label
        :game="runData.game"
        :category="runData.category"
        :platform="runData.platform"
      ></run-label>
    </div>
    <div class="timer">
      <timer
        :estimate="runData.estimate"
        :time="currentTime"
        :status="runStatus"
      ></timer>
    </div>
    <div class="runner">
      <nameplate
        v-if="runner"
        :display-social="displaySocial"
        :name="runner.name"
        :is-runner="true"
        :social="runner.social"
      ></nameplate>
    </div>
    <div class="commentator">
      <nameplate
        v-if="commentator"
        :display-social="displaySocial"
        :name="commentator.name"
        :is-runner="false"
        :social="commentator.social"
      ></nameplate>
    </div>
  </game-view>
</template>

<style scoped>
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import GameView from './GameView.vue';
import RunLabel from '../components/RunLabel/RunLabel.vue';
import Nameplate from '../components/Nameplate/Nameplate.vue';
import Timer from '../components/Timer/Timer.vue';
import { ClipPath } from '../components/ClippedCanvas/types';
import { gameViewModule } from '../_lib/gameViewModule';
@Component({
  components: {
    GameView,
    RunLabel,
    Nameplate,
    Timer,
  }
})
export default class SoloGameView extends Vue {
  @Prop(Array)
  readonly clipPaths!: ClipPath[];

  get currentTime(): string {
    return gameViewModule.currentTime.time;
  }

  get runStatus(): string {
    return gameViewModule.runStatus;
  }

  get runData() {
    return gameViewModule.runData;
  }

  get displaySocial() {
    return gameViewModule.existsSocials[gameViewModule.displaySocialIndex];
  }

  get runner() {
    return gameViewModule.runners[0] || null;
  }

  get commentator() {
    return gameViewModule.commentator.name !== '' ? gameViewModule.commentator : null;
  }
}
</script>