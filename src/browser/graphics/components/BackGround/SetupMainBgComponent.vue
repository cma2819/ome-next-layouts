<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1331"
      height="256"
      viewBox="0 0 1331 256"
    >
      <g transform="translate(-817 -744)">
        <path class="a" d="M0,0H770" transform="translate(835.378 872)" />
        <g class="b" transform="translate(837 882) rotate(180)">
          <circle class="d" cx="10" cy="10" r="10" />
          <circle class="e" cx="10" cy="10" r="7.5" />
        </g>
        <g class="b" transform="translate(1624 882) rotate(180)">
          <circle class="d" cx="10" cy="10" r="10" />
          <circle class="e" cx="10" cy="10" r="7.5" />
        </g>
        <path
          class="a"
          d="M916.58,872l118.415,118H1796.58"
          transform="translate(174.42)"
        />
        <g class="b" transform="translate(1989 1000) rotate(180)">
          <circle class="d" cx="10" cy="10" r="10" />
          <circle class="e" cx="10" cy="10" r="7.5" />
        </g>
        <path
          class="a"
          d="M916.58,990,1033.7,872h332.88"
          transform="translate(763.42 0)"
        />
        <g class="b" transform="translate(2148 882) rotate(180)">
          <circle class="d" cx="10" cy="10" r="10" />
          <circle class="e" cx="10" cy="10" r="7.5" />
        </g>
        <path
          class="a"
          d="M916.58,990l118.415-118H1342.58"
          transform="translate(537.42 -118)"
        />
        <g class="b" transform="translate(1898 764) rotate(180)">
          <circle class="d" cx="10" cy="10" r="10" />
          <circle class="e" cx="10" cy="10" r="7.5" />
        </g>
        <text class="c" transform="translate(1127.28 902.194) rotate(45)">
          <tspan x="0" y="0">Runner</tspan>
        </text>
        <text class="c" transform="translate(1674.553 989.542) rotate(-45)">
          <tspan x="0" y="0">Commentator</tspan>
        </text>
      </g>
    </svg>
    <div
      :style="{
        position: 'absolute',
        left: '0px',
        bottom: '0px',
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
.e {
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
  fill: #208200;
  font-size: 32px;
  font-family: UbuntuMono-Regular, Ubuntu Mono;
}
.d {
  stroke: none;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

/* global nodecg */
@Component
export default class SetupMainBg extends Vue {}
</script>