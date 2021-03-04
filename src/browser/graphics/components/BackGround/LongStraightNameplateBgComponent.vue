<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1222"
    height="20"
    viewBox="0 0 1222 20"
  >
    <g transform="translate(-382 -612)">
      <path class="a" d="M-154.378,0h1186" transform="translate(554.378 622)" />
      <g class="b" transform="translate(402 632) rotate(180)">
        <circle class="c" cx="10" cy="10" r="10" />
        <circle class="d" cx="10" cy="10" r="7.5" />
      </g>
      <g class="b" transform="translate(1604 632) rotate(180)">
        <circle class="c" cx="10" cy="10" r="10" />
        <circle class="d" cx="10" cy="10" r="7.5" />
      </g>
    </g>
  </svg>
</template>

<style scoped>
.a,
.b,
.d {
  fill: none;
}
.a,
.b {
  stroke: #208200;
}
.a {
  stroke-width: 10px;
}
.b {
  stroke-width: 5px;
}
.c {
  stroke: none;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

/* global nodecg */
@Component
export default class LongStraightNameplateBg extends Vue {}
</script>