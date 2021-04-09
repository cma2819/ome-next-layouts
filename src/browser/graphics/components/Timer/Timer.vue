<template>
  <div
    :style="{
      display: 'flex',
      width: '100%',
      height: '100%',
      color: nodecgTheme.text,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      padding: '20px 35px 8px',
    }"
  >
    <div
      :style="{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }"
    >
      <div class="label">
        Time
      </div>
      <div
        class="value"
        :style="{ color: timerColor }"
      >
        {{ time }}
      </div>
    </div>
    <div
      :style="{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }"
    >
      <div class="label estimate">
        Estimate
      </div>
      <div class="value estimate">
        {{ estimate }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.label {
  font: normal normal normal 32px Ubuntu Mono;
  letter-spacing: 0px;
}
.value {
  font: normal normal normal 64px/77px Ubuntu Mono;
  letter-spacing: 0px;
}
.estimate {
  text-align: right;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { TimerStatus } from './types';
import { theme } from '../../../plugin/theme';

@Component
export default class Timer extends Vue {

  @Prop(String)
  readonly status!: TimerStatus;
  @Prop(String)
  readonly time!: string;
  @Prop(String)
  readonly estimate!: string;

  get timerColor(): string {
    const colors = {
      'stopped': theme.timer.pause,
      'paused': theme.timer.pause,
      'running': theme.timer.running,
      'finished': theme.timer.finish
    }
    return colors[this.status] || 'white';
  }

  get nodecgTheme() {
    return theme;
  }
}
</script>
