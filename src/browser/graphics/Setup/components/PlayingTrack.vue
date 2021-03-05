<template>
  <div
    v-if="playingTrack"
    class="track"
    :style="{
      color: nodecgTheme.text,
      margin: '0 32px'
    }"
  >
    <i class="fas fa-music"></i>
    <span>
      {{ playingTrack.name || '' }} / {{ artistString }}
    </span>
  </div>
</template>

<style scoped>
.track {
  font: 24px 'Noto Sans JP'
}
.track > span {
  padding-left: 0.25em;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { SpotifyPlayingTrack } from '../../../../nodecg/external/nodecg-spotify-widget/spotifyPlayingTrack';
import { spotifyNodecg } from '../../../plugin/nodecg';
import { theme } from '../../../plugin/theme';

@Component
export default class PlayingTrackComponent extends Vue {
  playingTrack: SpotifyPlayingTrack|null = null;

  created(): void {
    spotifyNodecg.Replicant('spotifyPlayingTrack', 'nodecg-spotify-widget').on('change', (newVal) => {
      this.playingTrack = newVal;
    });
  }

  get artistString(): string {
    return this.playingTrack?.artists.join(',') || '';
  }

  get nodecgTheme() {
    return theme;
  }
}
</script>