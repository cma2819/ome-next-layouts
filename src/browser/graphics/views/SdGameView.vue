<style>
.games {
  position: absolute;
  top: 44px;
  left: 36px;
  width: 650px;
  height: 250px;
}
.timer {
  position: absolute;
  top: 323px;
  left: 36px;
  width: 650px;
  height: 250px;
}
.runner {
  position: absolute;
  top: 608px;
  left: 218px;
  width: 502px;
  height: 139px;
}
.commentator {
  position: absolute;
  top: 758px;
  left: 218px;
  width: 502px;
  height: 139px;
}
</style>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import SoloGameView from './SoloGameView.vue';

@Component
export default class SdGameView extends SoloGameView {}
</script>
