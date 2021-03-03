<template>
  <div :style="{
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    border: `3px solid ${nodecgTheme.text}`,
    color: nodecgTheme.text
  }">
    <div :style="{
      font: 'normal normal normal 36px DotGothic16',
      flexGrow: '2',
      display: 'flex',
      alignItems: 'center',
      marginLeft: '18px'
    }">
      {{ game }}
    </div>
    <div :style="{
      display: 'flex',
      margin: '2px 0',
      textAlign: 'right',
      font: 'normal normal normal 24px DotGothic16',
      justifyContent: 'flex-end',
      alignItems: 'center'
    }">
      <div :style="{
        textAlign: 'center',
        padding: '0 1em',
        borderRight: `2px solid ${nodecgTheme.text}`
      }">
        {{ category }}
      </div>
      <div :style="{
        padding: '0 1em'
      }">
        {{ platform }}
      </div>
    </div>
  </div>
</template>

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
}
</script>
