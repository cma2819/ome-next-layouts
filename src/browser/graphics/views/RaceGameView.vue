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
      <nameplate
        v-if="runners[0]"
        :display-social="displaySocial"
        :name="runners[0].name"
        :is-runner="true"
        :social="runners[0].social"
        :time="runners[0].time"
      ></nameplate>
    </div>
    <div class="runner-right">
      <nameplate
        v-if="runners[1]"
        :display-social="displaySocial"
        :name="runners[1].name"
        :is-runner="true"
        :social="runners[1].social"
        :is-right="true"
        :time="runners[1].time"
      ></nameplate>
    </div>
    <div class="commentator">
      <commentator-nameplate
        v-if="commentator.name !== ''"
        :display-social="displaySocial"
        :name="commentator.name"
        :is-runner="false"
        :social="commentator.social"
      ></commentator-nameplate>
    </div>
  </game-view>
</template>

<style>
.games {
  position: absolute;
  top: 780px;
  left: 40px;
  width: 650px;
  height: 140px;
}
.timer {
  position: absolute;
  top: 780px;
  left: 1240px;
  width: 650px;
  height: 140px;
}
.runner-left {
  position: absolute;
  top: 680px;
  left: 0px;
  width: 890px;
  height: 96px;
}
.runner-right {
  position: absolute;
  top: 680px;
  right: 0px;
  width: 890px;
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
import Nameplate from '../components/Nameplate/RaceNameplate.vue';
import CommentatorNameplate from '../components/Nameplate/RaceCommentatorNameplate.vue';
import Timer from '../components/Timer/Timer.vue';
import { ClipPath } from '../components/ClippedCanvas/types';
import { gameViewModule } from '../_lib/gameViewModule';
@Component({
  components: {
    GameView,
    RunLabel,
    Nameplate,
    CommentatorNameplate,
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