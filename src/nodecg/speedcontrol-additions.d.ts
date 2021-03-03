import { Assets } from "./asset";
import { GoogleApiDefined } from './external/speedcontrol-additions/googleApiDefined';
import { SpeedcontrolUserAdditionArray } from './external/speedcontrol-additions/speedcontrolUserAdditionArray';
import { SpeedcontrolPlayerArray } from "./external/speedcontrol-additions/speedcontrolPlayerArray";
import { CommentatorArray } from "./external/speedcontrol-additions/commentatorArray";
import { SpeedcontrolCurrentRunIndex } from "./external/speedcontrol-additions/speedcontrolCurrentRunIndex";
import { CreateNodecgInstance, CreateNodecgConstructor } from 'ts-nodecg/browser';

type ReplicantMap = {
    assets: Assets,
    commentatorArray: CommentatorArray,
    googleApiDefined: GoogleApiDefined,
    speedcontrolCurrentRunIndex: SpeedcontrolCurrentRunIndex,
    speedcontrolUserAdditionArray: SpeedcontrolUserAdditionArray,
    speedcontrolPlayerArray: SpeedcontrolPlayerArray,
};

type ReplicantName = (
    'commentatorArray' |
    'googleApiDefined' |
    'speedcontrolCurrentRunIndex' |
    'speedcontrolUserAdditionArray' |
    'speedcontrolPlayerArray'
);

type SpeedcontrolAdditionsInstance = CreateNodecgInstance<
  'speedcontrol-additions',
  {},
  ReplicantMap,
  {},
  true
>

type SpeedcontrolAdditionsConstructor = CreateNodecgConstructor<
  'speedcontrol-additions',
  {},
  ReplicantMap,
  {},
  true
>

export {
    Assets,
    CommentatorArray,
    GoogleApiDefined,
    SpeedcontrolCurrentRunIndex,
    SpeedcontrolUserAdditionArray,
    SpeedcontrolPlayerArray,
    ReplicantName,
    SpeedcontrolAdditionsConstructor,
    SpeedcontrolAdditionsInstance
};
