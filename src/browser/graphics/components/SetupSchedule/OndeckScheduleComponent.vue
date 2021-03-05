<template>
  <div
    :style="{
      color: nodecgTheme.text,
      marginBottom: '16px',
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
    <div
      :style="{
        display: 'flex',
        justifyContent: 'flex-end'
      }"
    >
      <div class="info">
        <span>{{ runData.category }}</span>
        |
        <span>{{ runData.system }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

.game, .estimate, .info {
  padding: 0 36px;
  display: flex;
  align-items: center;
}

.game {
  height: 70px;
  font: normal normal normal 28px 'Noto Sans JP';
}
.info {
  height: 32px;
  font: normal normal normal 24px 'Noto Sans JP';
}
.info > span {
  padding: 0 16px;
}

.estimate {
  font: normal normal normal 48px 'Ubuntu Mono';
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
