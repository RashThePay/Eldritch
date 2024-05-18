import lingoe from 'lingoe';
import {dictionary} from './dictionary.js'

export default function findMatch(input, farsi = false) {
    if (!input) return false;
    let target = input.replace(/[،\.\n]/g,'').trim()
    let match = '';
    let max = 1;
    let core = target.replace(/(\u200c)?(هایی|هایش|هایشان|های|هاست|ایست|ست|ان|ها|ی|ای)$/g,'')
    const Leven = (key) => {
        return Math.min(lingoe.distance(key, target), lingoe.distance(core, key));
    };
    for (const key of Object.keys(dictionary)) {
        let d = Leven(key);
        if (d < max) {
            max = d;
            match = key;
        }

    }
    if ((match == '') && target.split(' ').length && false) {
        max = 1;
        for (const key of Object.keys(dictionary)) {
            let total = 0;
            for (const word of target.split(' ')) {
                if (key.split(' ').length) {
                    let mw = 2;
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
    if (match == '') {
        return false;
    } else if (!farsi) {
        return dictionary[match];
    } else { 
        return match;
    }
}