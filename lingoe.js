import lingoe from 'lingoe';
import dictionary from './dictionary.json'

export default function findMatch(target) {
    if (!target) return false;

    let match = '';
    let max = 4;
    const Leven = (word, key) => {
        return Math.min(lingoe.distance(key, word), lingoe.distance(word.split('\u200cی')[0], key), lingoe.distance(word.split('\u200cها')[0], key));
    };
    for (const key of Object.keys(dictionary)) {
        let d = Leven(target, key);
        if (d < max) {
            max = d;
            match = key;
        }

    }
    if ((match === '') && target.split(' ').length) {
        max = 10;
        for (const key of Object.keys(dictionary)) {
            let total = 0;
            for (const word of target.split(' ')) {
                if (key.split(' ').length) {
                    let mw = 4;
                    for (const k of key.split(' ')) {
                        let d = Leven(word, k);
                        if (d < mw) {
                            mw = d;
                        }
                    }
                    total += mw;
                } else {
                    total += Leven(word, key);
                }
            }
            if (total < max) {
                max = total;
                match = key;
            }
        }
    }
    return match;
}