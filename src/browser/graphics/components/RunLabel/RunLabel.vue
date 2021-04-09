<template>
  <div
    :style="{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      color: nodecgTheme.text,
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
    }"
  >
    <div
      :style="{
        font: 'normal normal normal 36px \'Noto Sans JP\'',
        flexGrow: '2',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginLeft: '18px'
      }"
    >
      <span
        v-for="(g, idx) in gameSplits"
        :key="idx"
        class="game"
      >
        {{ g }}
      </span>
    </div>
    <div
      :style="{
        display: 'flex',
        margin: '2px 0',
        textAlign: 'right',
        font: 'normal normal normal 24px \'Noto Sans JP\'',
        justifyContent: 'flex-end',
        alignItems: 'center'
      }"
    >
      <div
        :style="{
          textAlign: 'center',
          padding: '0 1em',
          borderRight: `2px solid ${nodecgTheme.text}`
        }"
      >
        {{ category }}
      </div>
      <div
        :style="{
          padding: '0 1em'
        }"
      >
        {{ platform }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.game {
  padding-right: 0.25em;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import { theme } from '../../../plugin/theme';

@Component
export default class RunLabel extends Vue {
  @Prop(String)
  readonly game!: string;
  @Prop(String)
  readonly category!: string;
  @Prop(String)
  readonly platform!: string;

  get nodecgTheme() {
    return theme;
  }

  get gameSplits(): Array<string> {
    return this.game.split(' ');
  }
}
</script>
