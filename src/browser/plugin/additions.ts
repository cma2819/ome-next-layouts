import { VuexModule, getModule, Module, Mutation } from 'vuex-module-decorators';
import store from './store';
import { ReplicantName, SpeedcontrolUserAdditionArray, SpeedcontrolPlayerArray, GoogleApiDefined, CommentatorArray, SpeedcontrolCurrentRunIndex } from '../../nodecg/speedcontrol-additions';
import clone from 'clone';
import { additionNodecg } from './nodecg';

@Module({ dynamic: true, store, name: 'additions', namespaced: true })
class Additions extends VuexModule {
    speedcontrolCurrentRunIndex: SpeedcontrolCurrentRunIndex = 0;
    speedcontrolUserAdditionArray: SpeedcontrolUserAdditionArray = [];
    speedcontrolPlayerArray: SpeedcontrolPlayerArray = [];
    googleApiDefined = false;
    commentatorArray: CommentatorArray = [];

    @Mutation
    public updateSpeedcontrolCurrentRunIndex(value: SpeedcontrolCurrentRunIndex): void {
        this.speedcontrolCurrentRunIndex = value;
    }

    @Mutation
    public updateSpeedcontrolUserAdditionArray(value: SpeedcontrolUserAdditionArray): void {
        this.speedcontrolUserAdditionArray = value;
    }
    @Mutation
    public updateSpeedcontrolPlayerArray(value: SpeedcontrolPlayerArray): void {
        this.speedcontrolPlayerArray = value;
    }
    @Mutation
    public updateGoogleApiDefined(value: GoogleApiDefined): void {
        this.googleApiDefined = value;
    }
    @Mutation
    public updateCommentatorArray(value: CommentatorArray): void {
        this.commentatorArray = value;
    }
}

export const additionsModule = getModule(Additions);

const replicantMutations: [ReplicantName, Function][] = [
    ['speedcontrolCurrentRunIndex', additionsModule.updateSpeedcontrolCurrentRunIndex],
    ['speedcontrolUserAdditionArray', additionsModule.updateSpeedcontrolUserAdditionArray],
    ['speedcontrolPlayerArray', additionsModule.updateSpeedcontrolPlayerArray],
    ['googleApiDefined', additionsModule.updateGoogleApiDefined],
    ['commentatorArray', additionsModule.updateCommentatorArray],
];

replicantMutations.forEach(([name, mutator]) => {
    const replicant = additionNodecg.Replicant(name, 'speedcontrol-additions');

    replicant.on('change', (newVal) => {
        mutator(clone(newVal));
    });
});
