<template>
  <div>
    <div class="schedule">
      <setup-schedule></setup-schedule>
    </div>
  </div>
</template>

<style scoped>
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

@Component({
  components: {
    SetupSchedule,
  }
})
export default class App extends Vue {}
</script>