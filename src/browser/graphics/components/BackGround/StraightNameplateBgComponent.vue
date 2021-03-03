<template>
  <div>
    <slot></slot>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="490"
      height="20"
      viewBox="0 0 490 20"
    >
      <g transform="translate(-715 -862)">
        <line class="a" x2="454" transform="translate(733 872)" />
        <g class="b" transform="translate(735 882) rotate(180)" :stroke="color">
          <circle class="c" cx="10" cy="10" r="10" />
          <circle class="d" cx="10" cy="10" r="7.5" />
        </g>
        <g class="b" transform="translate(1205 882) rotate(180)" :stroke="color">
          <circle class="c" cx="10" cy="10" r="10" />
          <circle class="d" cx="10" cy="10" r="7.5" />
        </g>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.a,
.b,
.d {
  fill: none;
}
.a {
  stroke-width: 10px;
}
.b {
  stroke-width: 5px;
}
.a,
.b {
  stroke: #208200;
}
.c {
  stroke: none;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

/* global nodecg */
@Component
export default class StraightNameplateBg extends Vue {}
</script>