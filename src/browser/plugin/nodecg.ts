import { SpeedcontrolAdditionsInstance } from '../../nodecg/speedcontrol-additions';
import { SpotifyWidgetInstance } from '../../nodecg/spotify';
import { TwitterWidgetInstance } from '../../nodecg/twitter';
import { BundleNodecgInstance } from '../global';

export const bundleNodecg = nodecg as BundleNodecgInstance;
export const additionNodecg = nodecg as SpeedcontrolAdditionsInstance;
export const twitterNodecg = nodecg as TwitterWidgetInstance;
export const spotifyNodecg = nodecg as SpotifyWidgetInstance;
