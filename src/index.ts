import { v4 } from 'uuid';
import { TakeChance } from 'take-chance';

const ALL_LETTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const ALL_NUMBERS = '0123456789'.split('');
const ID_SPECIAL_CHARS = '_-'.split('');

export function id(length: number = 16): string {
    return TakeChance.id();
}
export function fromUuid(): string {
    let uuidBuffer = new Uint8Array(16);
    uuidBuffer = v4(undefined, uuidBuffer);
    console.log(uuidBuffer);
    
    let ret = 'a';
    for (const byte of uuidBuffer) {
        ret += byte.toString(36);
    }
    return ret;
}

fromUuid();