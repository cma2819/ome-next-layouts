import { NodeCG } from './nodecg';

export const current = (nodecg: NodeCG): void => {
  const currentReplicant = nodecg.Replicant('current-datetime', {
    defaultValue: {
      date: '',
      time: ''
    }
  });

  setInterval(() => {
    const nowLocaleString = new Date(Date.now()).toLocaleString('ja-JP', {
      timeZone: 'Asia/Tokyo',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });

    currentReplicant.value = {
      date: nowLocaleString.split(' ')[0],
      time: nowLocaleString.split(' ')[1],
    };
  }, 1000);
}