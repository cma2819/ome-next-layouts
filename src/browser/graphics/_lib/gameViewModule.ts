import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators';
import store from '../../plugin/store';
import { additionsModule as additions } from '../../plugin/additions';
import { speedcontrolModule as speedcontrol } from '../../plugin/speedcontrol';
import { Social } from '../components/Nameplate/types';
import { existsSocialIn, secondsToFormatted } from './util';
import { RunData } from '../../../nodecg/external/speedcontrol/RunData';

@Module({ dynamic: true, store, name: 'gameViewModule', namespaced: true })
class GameViewModule extends VuexModule {
    displaySocialIndex = 0;

    get runData(): {
        game: string;
        category: string;
        platform: string;
        estimate: string;
    } {
        const currentRun = speedcontrol.runDataArray[
            additions.speedcontrolCurrentRunIndex
        ];
        return {
            game: currentRun?.game || '',
            category: currentRun?.category || '',
            platform: currentRun?.system || '',
            estimate: currentRun?.estimate || ''
        };
    }

    get nextRunData(): {
        runData: RunData | null;
        runner: string;
    } {
        if (speedcontrol.runDataArray.length === additions.speedcontrolCurrentRunIndex + 1) {
            return {
                runData: null,
                runner: ''
            };
        }

        const nextRun = speedcontrol.runDataArray[
            additions.speedcontrolCurrentRunIndex + 1
        ];

        return {
            runData: nextRun || null,
            runner: nextRun.teams.map((team) => {
                return team.players[0].name
            }).join(' / ')
        }
    }

    get commentator(): {
        name: string;
        social: Social;
    } {
        const name: string[] = [];
        const twitch: (string|null)[] = [];
        const nico: (string|null)[] = [];
        const youtube: (string|null)[] = [];
        const twitter: (string|null)[] = [];
        const currentRun = speedcontrol.runDataArray[
            additions.speedcontrolCurrentRunIndex
        ];
        if (!currentRun) {
            return {
                name: '',
                social: {}
            }
        }
        additions.commentatorArray.filter((commentator) => {
            return commentator.assignedRunIdArray.some(runId => runId === currentRun.externalID);
        }).forEach((commentator) => {
            name.push(commentator.name);
            commentator.social.twitch ? twitch.push(commentator.social.twitch) : twitch.push('-');
            commentator.social.nico ? nico.push(commentator.social.nico) : nico.push('-');
            commentator.social.youtube ? youtube.push(commentator.social.youtube) : youtube.push('-');
            commentator.social.twitter ? twitter.push(commentator.social.twitter) : twitter.push('-');
        });

        return {
            name: name.join(' / '),
            social: {
                twitch: twitch.filter((t) => t !=='-').length > 0 ? twitch.join(' / ') : undefined,
                nico: nico.filter((n) => n !== '-').length > 0 ? nico.join(' / ') : undefined,
                youtube: youtube.filter((y) => y !== '-').length > 0 ? youtube.join(' / ') : undefined,
                twitter: twitter.filter((t) => t !== '-').length > 0 ? twitter.join(' / ') : undefined
            }
        }
    }

    get runners(): {
        name: string;
        social: Social;
        status: 'forfeit' | 'completed' | 'running';
        time: string;
    }[] {
        const currentRun = speedcontrol.runDataArray[
            additions.speedcontrolCurrentRunIndex
        ];
        const teamFinishTimes = speedcontrol?.timer?.teamFinishTimes;
        if (!currentRun || !teamFinishTimes) {
            return [];
        }
        return currentRun.teams.map((team) => {
            const runner = team.players[0];
            if (!runner) {
                return {
                    name: '',
                    social: {},
                    status: 'running',
                    time: ''
                }
            }
            const runnerAddition = additions.speedcontrolUserAdditionArray.find((userAddition) => {
                return userAddition.id === runner.externalID;
            });

            const finishTime = teamFinishTimes[team.id];

            return {
                name: runner.name,
                social: {
                    twitch: runner.social.twitch,
                    nico: runnerAddition?.social.nico,
                    youtube: runnerAddition?.social.youtube,
                    twitter: runnerAddition?.social.twitter
                },
                status: finishTime ? finishTime.state : 'running',
                time: finishTime ? secondsToFormatted(Math.floor(finishTime.milliseconds / 1000)) : ''
            };
        });
    }

    get existsSocials(): number[] {
        const existsAll: number[][] = [];
        this.runners.forEach((runner) => {
            existsAll.push(existsSocialIn(runner.social));
        })
        existsAll.push(existsSocialIn(this.commentator.social));

        return existsAll.flat().filter((socialIndex, index, self) => {
            return self.indexOf(socialIndex) === index;
        }).sort();
    }

    get currentSocial(): number {
        return this.existsSocials[this.displaySocialIndex];
    }

    get currentTime(): {
        ms: number;
        time: string;
    } {
        return {
            ms: speedcontrol.timer.milliseconds || 0,
            time: speedcontrol.timer.milliseconds ? secondsToFormatted(Math.floor(speedcontrol.timer.milliseconds / 1000)) : '00:00'
        };
    }

    get runStatus(): ('stopped' | 'running' | 'paused' | 'finished') {
        return speedcontrol.timer.state || 'stopped'
    }

    @Mutation
    _nextSocial(exists: number[]): void {
        this.displaySocialIndex = (this.displaySocialIndex + 1) % exists.length;
    }

    @Action
    nextSocial(): void {
        this._nextSocial(this.existsSocials);
    }
}

export const gameViewModule = getModule(GameViewModule);
