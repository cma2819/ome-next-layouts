<template>
  <div>
    <svg
      :class="{
        mirrored: mirror
      }" 
      xmlns="http://www.w3.org/2000/svg"
      width="502"
      height="87.536"
      viewBox="0 0 502 87.536"
    >
      <g transform="translate(0 -19)">
        <line class="a" x2="421.5" transform="translate(502 101.5) rotate(180)" />
        <line
          class="a"
          x1="70"
          y1="70"
          transform="translate(84 103) rotate(180)"
        />
        <g class="b" transform="translate(20 39) rotate(180)">
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
        height: '100%'
      }">
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
    transform: scale(-1, 1);
  }
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

/* global nodecg */
@Component
export default class ShortNameplateBg extends Vue {
  @Prop({ default: false})
  readonly mirror!: boolean;
}
</script>