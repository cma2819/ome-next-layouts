<template>
  <div
    :style="{
      display: 'inline-flex',
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }"
  >
    <upnext-schedule
      :run-data="upnextRun"
    ></upnext-schedule>
    <div
      v-if="ondeckRuns.length > 0"
      :style="{
        padding: '12px 48px',
      }"
    >
      <div
        :style="{
          color: nodecgTheme.text,
          font: 'normal normal normal 32px \'Noto Sans JP\''
        }"
      >
        今後のゲーム
      </div>
      <ondeck-schedule
        v-for="(run, idx) in ondeckRuns"
        :key="run.id"
        :run-data="run"
        :start-in="upcomingStartIn[idx + 1]"
      ></ondeck-schedule>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import UpnextSchedule from './UpnextScheduleComponent.vue'
import OndeckSchedule from './OndeckScheduleComponent.vue';
import { RunData } from '../../../../nodecg/external/speedcontrol/RunData';
import { speedcontrolModule } from '../../../plugin/speedcontrol';
import { additionsModule } from '../../../plugin/additions';
import { secondsToFormatted } from '../../_lib/util';
import { theme } from '../../../plugin/theme';

@Component({
  components: {
    UpnextSchedule,
    OndeckSchedule
  }
})
export default class SetupScheduleComponent extends Vue {

  get upcomingRuns(): RunData[] {
    const currentRunIndex = additionsModule.speedcontrolCurrentRunIndex || 0;
    return speedcontrolModule.runDataArray.slice(currentRunIndex, currentRunIndex + 3);
  }

  get upnextRun(): RunData {
    return this.upcomingRuns[0]
  }

  get ondeckRuns(): RunData[] {
    return this.upcomingRuns.filter((_, index) => {
      return index !== 0;
    });
  }

  get upcomingStartIn(): string[] {
    if (!this.upcomingRuns) {
      return [];
    }
    const startInArray = [];
    startInArray.push(''); // First Element is never used
    if (!this.upcomingRuns[1]) {
      return startInArray;
    }
    const secondRunStartIn = (this.upcomingRuns[0].estimateS || 0) + (this.upcomingRuns[1].setupTimeS || 0);
    startInArray.push(secondsToFormatted(secondRunStartIn));
    if (!this.upcomingRuns[2]) {
      return startInArray;
    }
    const thirdRunStartIn = secondRunStartIn + (this.upcomingRuns[1].estimateS || 0) + (this.upcomingRuns[2].setupTimeS || 0);
    startInArray.push(secondsToFormatted(thirdRunStartIn));
    return startInArray;
  }

  get nodecgTheme() {
    return theme;
  }
}
</script>
