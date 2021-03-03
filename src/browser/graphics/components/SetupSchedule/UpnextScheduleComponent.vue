<template>
  <div
    v-if="runData"
    id="run-1"
    class="next"
  >
    <span
      id="up-next"
      class="label"
    >UP NEXT:</span>
    <div class="box game">
      <span class="title">{{ runData.game }}</span>
      <div class="info">
        <div class="category">
          <span class="label">Category: </span>{{ runData.category }}
        </div>
        <div class="platform">
          <span class="label">Platform: </span>{{ runData.system }}
        </div>
        <div class="est"><span class="label">EST: </span>{{ runData.estimate }}</div>
      </div>
      <div class="info">
        <div class="runner">
          <span class="label">Runner: </span>{{ runners }}
        </div>
        <div
          v-if="commentators"
          class="commentator"
        >
          <span class="label">Commentator: </span>{{ commentators }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#up-next {
  font-size: 2em;
}

.game {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  font-size: 1.2em;
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

@Component
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
}
</script>
