<template>
  <div
    :style="{
      color: nodecgTheme.text
    }"
  >
    <div
      :style="{
        display: 'flex',
        justifyContent: 'space-between'
      }"
    >
      <div class="game">
        {{ runData.game }}
      </div>
      <div class="estimate">
        {{ runData.estimate }}
      </div>
    </div>
    <long-straight-nameplate-bg></long-straight-nameplate-bg>
  </div>
</template>

<style scoped>

.game, .estimate {
  height: 70px;
  padding: 0 36px;
  font: normal normal normal 28px 'Source Han Sans JP';
  display: flex;
  align-items: center;
}

.game > * {
  padding-left: 16px;
}

.game .title {
  display: block;
  font-size: 1.6em;
  font-weight: bold;
  margin-top: -0.2em;
}

.info div {
  display: inline-block;
  margin-right: 1em;
}

.next .game {
  height: 200px;
}

.later-than-next {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.later-than-next .time {
  font-size: 1.4em;
  width: 160px;
}

.later-than-next .game {
  height: 160px;
  font-size: 100%;
}

</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { RunData } from '../../../../nodecg/external/speedcontrol/RunData';
import { additionsModule } from '../../../plugin/additions';
import { theme } from '../../../plugin/theme';
import LongStraightNameplateBg from '../BackGround/LongStraightNameplateBgComponent.vue';

@Component({
  components: {
    LongStraightNameplateBg,
  }
})
export default class SetupScheduleComponent extends Vue {
  @Prop(Object)
  readonly runData!: RunData;

  get runners(): string {
    return this.runData.teams.flatMap((team) => {
      return team.players.flatMap((player) => {
        return player.name;
      });
    }).join(' / ');
  }

  get commentators(): string {
    if (this.runData === undefined) {
      console.log('runData is undefined');
      return '';
    }
    return additionsModule.commentatorArray.filter((commentator) => {
      return commentator.assignedRunIdArray.find(runId => runId === this.runData.externalID);
    }).map((commentator) => {
      return commentator.name;
    }).join(' / ');
  }

  get scheduled(): string {
    if (this.runData.scheduledS) {
      return (new Date(this.runData.scheduledS * 1000)).toLocaleTimeString('ja-JP', {hour: '2-digit', minute: '2-digit'});
    }

    return '';
  }

  get nodecgTheme() {
    return theme;
  }
}
</script>
