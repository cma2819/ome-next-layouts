"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.current = void 0;
exports.current = function (nodecg) {
    var logger = new nodecg.Logger('current');
    var currentReplicant = nodecg.Replicant('current-datetime', {
        defaultValue: {
            date: '',
            time: ''
        }
    });
    setInterval(function () {
        var nowLocaleString = new Date(Date.now()).toLocaleString('ja-JP', {
            timeZone: 'Asia/Tokyo',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
        });
        logger.info("current datetime change to " + nowLocaleString);
        currentReplicant.value = {
            date: nowLocaleString.split(' ')[0],
            time: nowLocaleString.split(' ')[1],
        };
    }, 1000);
};
