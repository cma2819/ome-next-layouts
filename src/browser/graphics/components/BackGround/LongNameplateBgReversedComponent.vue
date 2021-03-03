<template>
  <div>
    <svg
      :class="{
        mirrored: mirror
      }" 
      xmlns="http://www.w3.org/2000/svg"
      width="898"
      height="56.536"
      viewBox="0 0 898 56.536"
      transform="scale(1, -1)"
    >
      <g transform="translate(-1.5 3.536)">
        <path class="a" d="M851.944,0H0" transform="translate(47.556 1.5)" />
        <path class="a" d="M0,37.185,37.185,0" transform="translate(15.313)" />
        <g class="b" transform="translate(1.5 33)">
          <circle class="c" cx="10" cy="10" r="10" />
          <circle class="d" cx="10" cy="10" r="7.5" />
        </g>
      </g>
    </svg>
    <div
      :style="{
        position: 'absolute',
        left: '0px',
        top: '0px',
        width: '100%',
        height: '100%',
      }"
    >
      <slot></slot>
    </div>
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
.c {
  stroke: none;
}
.a,
.b {
  stroke: #208200;
}
.mirrored {
  transform: scale(1, -1);
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

/* global nodecg */
@Component
export default class ShortNameplateBg extends Vue {}
</script>