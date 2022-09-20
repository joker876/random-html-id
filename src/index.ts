import shortUuid from 'short-uuid';
import { TakeChance } from 'take-chance';

/**
Returns a string of length *length*, consisting of characters a-z, A-Z, 0-9, "-", and "_" that always starts with a letter. The default length is 16, for approximately 8×10^18 possible combinations.

__Example__:
```typescript
randomId.id();   -> 'xw7MrWHkx2HZVP7g'
randomId.id(24); -> 'cqPiA_aGb2lhBZLPBdS1Op0p'
```
 */
export function id(): string
export function id(length: number): string
export function id(length: number = 16): string {
    return TakeChance.id(length);
}
/**
Returns a random uuid-based string, encoded in base58. The returned string always starts with the letter "a" to ensure that the id starts with a letter.

It always returns a string of 23 characters.

This method is the best way of ensuring that the id you are going to use for your HTML is unique.

__Example__:
```typescript
randomId.fromUuid(); -> 'awxhFMb9XiCjsaZ39vsKrFk';
```
 */
export function fromUuid(): string {
    return 'a' + shortUuid.generate();
}