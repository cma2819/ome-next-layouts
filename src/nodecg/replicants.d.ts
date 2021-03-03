import { Assets } from "./asset";
import { CurrentDatetime } from './generated';

type ReplicantMap = {
  'assets:background': Assets;
  'assets:logo': Assets;
  'current-datetime': CurrentDatetime;
};

export {
    Assets,
    ReplicantMap
};
