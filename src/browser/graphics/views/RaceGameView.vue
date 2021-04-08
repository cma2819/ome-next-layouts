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
    <div class="runner-left">
      <race-nameplate
        v-if="runners[0]"
        :display-social="displaySocial"
        :name="runners[0].name"
        :is-runner="true"
        :social="runners[0].social"
        :time="runners[0].time"
      ></race-nameplate>
    </div>
    <div class="runner-right">
      <race-nameplate
        v-if="runners[1]"
        :display-social="displaySocial"
        :name="runners[1].name"
        :is-runner="true"
        :social="runners[1].social"
        :is-right="true"
        :time="runners[1].time"
      ></race-nameplate>
    </div>
    <div class="commentator">
      <nameplate
        v-if="commentator.name !== ''"
        :display-social="displaySocial"
        :name="commentator.name"
        :is-runner="false"
        :social="commentator.social"
      ></nameplate>
    </div>
  </game-view>
</template>

<style>
.games {
  position: absolute;
  top: 780px;
  left: 36px;
  width: 650px;
  height: 140px;
}
.timer {
  position: absolute;
  top: 780px;
  right: 36px;
  width: 650px;
  height: 140px;
}
.runner-left {
  position: absolute;
  top: 680px;
  left: 36px;
  width: 864px;
  height: 96px;
}
.runner-right {
  position: absolute;
  top: 680px;
  right: 36px;
  width: 864px;
  height: 96px;
}
.commentator {
  position: absolute;
  top: 796px;
  left: 715px;
  width: 490px;
  height: 134px;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import GameView from './GameView.vue';
import RunLabel from '../components/RunLabel/RunLabel.vue';
import Nameplate from '../components/Nameplate/Nameplate.vue';
import RaceNameplate from '../components/Nameplate/RaceNameplate.vue';
import Timer from '../components/Timer/Timer.vue';
import { ClipPath } from '../components/ClippedCanvas/types';
import { gameViewModule } from '../_lib/gameViewModule';
@Component({
  components: {
    GameView,
    RunLabel,
    Nameplate,
    RaceNameplate,
    Timer,
  }
})
export default class RaceGameView extends Vue {
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

  get runners() {
    return gameViewModule.runners;
  }

  get commentator() {
    return gameViewModule.commentator;
  }
}
</script>