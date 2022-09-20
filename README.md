# random-html-id
[MIT License](http://img.shields.io/badge/license-MIT-blue.svg)
[NPM](https://img.shields.io/npm/v/first-last.svg)

Two functions for generating random HTML5 compliant ids.

## Installation
### Node
```
npm install random-html-id --save
```

### Browser
```html
<script src="https://joker876.github.io/random-html-id/dist/index.min.js"></script>
```

## Usage
### Node
```typescript
import randomId from 'random-html-id';
// or
const randomId = require('random-html-id');
```

### Browser
All declarations are automatically available in all other files.

## Functions
### id()
```typescript
randomId.id(length: number): string
```
Returns a string of length *length*, consisting of characters a-z, A-Z, 0-9, "-", and "_" that always starts with a letter. The default length is 16, for approximately 8×10^18 possible combinations.

**Example**:
```typescript
randomId.id();       -> 'xw7MrWHkx2HZVP7g'
randomId.id(24);     -> 'cqPiA_aGb2lhBZLPBdS1Op0p'
```

### fromUuid()
```typescript
randomId.fromUuid(): string
```
Returns a random uuid-based string, encoded in base58. The returned string always starts with the letter "a" to ensure that the id starts with a letter.

It always returns a string of 23 characters.

This method is the best way of ensuring that the id you are going to use for your HTML is unique.

**Example**:
```typescript
randomId.fromUuid(); -> 'awxhFMb9XiCjsaZ39vsKrFk';
```