<template>
  <div>
    <div class="spotify">
      <playing-track></playing-track>
    </div>
    <div class="schedule">
      <setup-schedule></setup-schedule>
    </div>
  </div>
</template>

<style scoped>
.spotify {
  position: absolute;
  top: 32px;
  right: 0px;
}

.schedule {
  position: absolute;
  top: 227px;
  left: 295px;
  width: 1331px;
  height: 256px;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import SetupSchedule from '../components/SetupSchedule/SetupScheduleComponent.vue';
import PlayingTrack from './components/PlayingTrack.vue';

@Component({
  components: {
    SetupSchedule,
    PlayingTrack,
  }
})
export default class App extends Vue {}
</script>