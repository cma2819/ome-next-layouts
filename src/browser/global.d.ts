import {
  CreateNodecgInstance,
  CreateNodecgConstructor
} from 'ts-nodecg/browser';
import { Configschema } from '../nodecg/generated/configschema';
import { ReplicantMap } from '../nodecg/replicants';
import { MessageMap } from '../nodecg/messages';
import { TwitterWidgetConstructor, TwitterWidgetInstance } from '../nodecg/twitter';
import { SpotifyWidgetConstructor, SpotifyWidgetInstance } from '../nodecg/spotify';
import { SpeedcontrolConstructor, SpeedcontrolInstance } from '../nodecg/speedcontrol';
import { SpeedcontrolAdditionsConstructor, SpeedcontrolAdditionsInstance } from '../nodecg/speedcontrol-additions';

type BundleNodecgInstance = CreateNodecgInstance<
  'ome-next-layouts',
  Configschema,
  ReplicantMap,
  MessageMap
>;

type BundleNodecgConstructor = CreateNodecgConstructor<
  'ome-next-layouts',
  Configschema,
  ReplicantMap,
  MessageMap
>;

declare global {
  const nodecg: BundleNodecgInstance & SpeedcontrolInstance & SpeedcontrolAdditionsInstance & TwitterWidgetInstance & SpotifyWidgetInstance;

  const NodeCG: BundleNodecgConstructor & SpeedcontrolConstructor & SpeedcontrolAdditionsConstructor & TwitterWidgetConstructor & SpotifyWidgetConstructor;
    
}
