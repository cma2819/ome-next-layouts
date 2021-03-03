<style>
.games {
  position: absolute;
  top: 780px;
  left: 540px;
  width: 650px;
  height: 150px;
}
.timer {
  position: absolute;
  top: 780px;
  left: 1240px;
  width: 650px;
  height: 150px;
}
.runner {
  position: absolute;
  top: 472px;
  left: 27px;
  width: 502px;
  height: 139px;
}
.commentator {
  position: absolute;
  top: 626px;
  left: 27px;
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
