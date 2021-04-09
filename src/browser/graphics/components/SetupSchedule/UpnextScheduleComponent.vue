<template>
  <div
    v-if="runData"
    :style="{
      color: nodecgTheme.text,
    }"
  >
    <div>
      <div
        class="label"
        :style="{
          fontSize: '42px',
          fontWeight: 'bold',
          color: nodecgTheme.secondary,
        }"
      >
        次のゲーム
      </div>
      <div class="panel">
        <div
          class="data jp"
          :style="{
            fontSize: '36px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            width: '50%',
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
          :style="{
            width: '50%',
          }"
        >
          <div
            class="label"
            :style="{
              fontSize: '32px',
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
        </div>
      </div>
      <div class="panel">
        <div 
          class="data jp game-info"
          :style="{
            width: '50%',
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
              width: '90%',
              borderBottom: `2px solid ${nodecgTheme.text}`
            }"
          >
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
          >
            {{ runData.system }}
          </div>
        </div>
        <div
          :style="{
            width: '50%',
          }"
        >
          <div
            v-if="runners"
            class="data jp namespace"
          >
            <div>
              {{ runners }}
            </div>
            <div
              :style="{
                color: nodecgTheme.secondary,
              }"
            >
              Runner
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
            <div
              v-if="commentators"
              class="data jp namespace"
            >
              <div>
                {{ commentators }}
              </div>
              <div
                :style="{
                  color: nodecgTheme.secondary,
                }"
              >
                Commentator
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.label {
  font-family: Noto Sans JP;
}

.panel {
  padding: 8px 16px;
  display: flex;
  width: 100%;
}

.game-info > div {
  text-align: left;
  padding: 4px 8px;
}
.jp {
  font-family: Noto Sans JP;
}
.en {
  font-family: Ubuntu Mono;
}
.splits {
  padding: 0 0.25em;
}
.namespace {
  border-bottom: 2px solid #ffffff;
  justify-content: space-between;
  font-size: 32px;
  display: flex;
  flex-direction: row;
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

  get runners(): string {
    return this.runData.teams.flatMap((team) => {
      return team.players.flatMap((player) => {
        return player.name;
      });
    }).join(' , ');
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
    }).join(' , ');
  }

  get nodecgTheme() {
    return theme;
  }
}
</script>
