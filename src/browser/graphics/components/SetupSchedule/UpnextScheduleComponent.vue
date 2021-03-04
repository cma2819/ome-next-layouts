<template>
  <div
    v-if="runData"
    :style="{
      color: nodecgTheme.text,
    }"
  >
    <setup-main-bg>
      <div>
        <div
          class="label"
          :style="{
            fontSize: '42px',
            top: '-32px',
            left: '32px',
          }"
        >
          次のゲーム
        </div>
        <div
          class="data jp"
          :style="{
            display: 'block',
            fontSize: '28px',
            top: '48px',
            left: '32px',
            height: '84px',
            width: '630px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center'
          }"
        >
          <div
            v-for="(title, idx) in titleSplits"
            :key="idx"
            :style="{
              padding: '0 0.25em'
            }"
          >
            {{ title }}
          </div>
        </div>
        <div 
          class="data jp game-info"
          :style="{
            top: '142px',
            left: '32px',
            width: '256px',
            fontSize: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
          }"
        >
          <div
            v-if="categorySplits.length > 0"
            :style="{
              display: 'flex',
              flexWrap: 'wrap',
              width: '100%',
              borderBottom: `4px solid ${nodecgTheme.secondary}`
          }">
            <div
              v-for="(category, idx) in categorySplits"
              :key="idx"
              :style="{
                padding: '0 0.25em',
              }"
            >
              {{ category }}
            </div>
          </div>
          <div
            :style="{
              margin: '0 0.25em'
            }"
          >{{ runData.system }}</div>
        </div>
        <div
          class="label"
          :style="{
            fontSize: '32px',
            top: '-40px',
            left: '758px',
          }"
        >
          予定タイム
        </div>
        <div
          class="data en"
          :style="{
            fontSize: '64px',
            top: '22px',
            left: '778px',
          }"
        >
          {{ runData.estimate }}
        </div>
        <div
          class="data jp"
          :style="{
            fontSize: '28px',
            top: '128px',
            left: '400px',
            height: '120px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }"
        >
          <div
            v-for="(runner, idx) in runners"
            :key="idx"
          >
            {{ runner }}
          </div>
        </div>
        <div
          class="data jp"
          :style="{
            fontSize: '28px',
            top: '128px',
            left: '980px',
            height: '120px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }"
        >
          {{ commentators }}
        </div>
      </div>
    </setup-main-bg>
  </div>
</template>

<style scoped>
.label {
  position: absolute;
  font-family: Source Han Sans JP;
}

.data {
  position: absolute;
}
.game-info > div {
  text-align: left;
  padding: 4px 8px;
}
.jp {
  font-family: Source Han Sans JP;
}
.en {
  font-family: Ubuntu Mono;
}
.splits {
  padding: 0 0.25em;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import SetupMainBg from '../BackGround/SetupMainBgComponent.vue';
import { RunData } from '../../../../nodecg/external/speedcontrol/RunData';
import { additionsModule } from '../../../plugin/additions';
import { theme } from '../../../plugin/theme';

@Component({
  components: {
    SetupMainBg
  }
})
export default class SetupScheduleComponent extends Vue {
  @Prop(Object)
  readonly runData!: RunData;

  get titleSplits(): Array<string> {
    return this.runData.game?.split(' ') || [];
  }

  get categorySplits(): Array<string> {
    return this.runData.category?.split(' ') || [];
  }

  get runners(): Array<string> {
    return this.runData.teams.flatMap((team) => {
      return team.players.flatMap((player) => {
        return player.name;
      });
    });
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

  get nodecgTheme() {
    return theme;
  }
}
</script>
