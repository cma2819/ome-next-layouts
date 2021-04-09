<template>
  <div class="bg">
    <div class="schedule">
      <setup-schedule></setup-schedule>
    </div>
    <div class="spotify">
      <playing-track></playing-track>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-color: rgba(0, 0, 0, 0.6);
  height: 930px;
  width: 1575px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.spotify {
  display: flex;
  justify-content: end;
}

.schedule {
  padding: 100px 150px 16px;
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