import shortUuid from 'short-uuid';
import { TakeChance } from 'take-chance';

export function id(length: number = 16): string {
    return TakeChance.id(length);
}
export function fromUuid(): string {
    return 'a' + shortUuid.generate();
}