import { current } from './current';
import { NodeCG } from './nodecg';

export = (nodecg: NodeCG): void => {
  current(nodecg);
}