<style>
.games {
  position: absolute;
  top: 760px;
  left: 633px;
  width: 628px;
  height: 150px;
}
.timer {
  position: absolute;
  top: 760px;
  left: 1270px;
  width: 650px;
  height: 150px;
}
.runner {
  position: absolute;
  top: 137px;
  left: 133px;
  width: 502px;
  height: 139px;
}
.commentator {
  position: absolute;
  top: 291px;
  left: 133px;
  width: 502px;
  height: 139px;
}
</style>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import SoloGameView from './SoloGameView.vue';

@Component
export default class HdGameView extends SoloGameView {}
</script>
