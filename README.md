# binary-uuid

This package converts a UUID value from a `CHAR(36)` into a `BINARY(16)` representation. More importantly, it also scrambles the ordering of the `UUID` so that the first bytes (the ones that change fastest in UUIDv1) are moved to the middle of the UUID.

This is important for `mysql` and similar that will index the value based upon the first bytes it sees.

For more information on why this is critical, see [Store UUIDs in an Optimized Way](https://www.percona.com/blog/2014/12/19/store-uuid-optimized-way/).

## Installation

```
yarn add binary-uuid
// OR
npm install --save binary-uuid
```

## UUIDv1

It is important when using the UUID's that we use `UUIDv1` and not `v4`. This is because `v4` is inherently random and thus will cause major performance issues if indexed with your database.

If indexing is not a concern then your best bet is to simply convert a `uuid` yourself.

## Examples

### Create Binary UUID

By utilizing the default export we can create a `UUIDv1` as well as create the `BINARY(16)` representation quickly.

```javascript
import createBinaryUUID from "binary-uuid";

const binaryID = createBinaryUUID();

console.log(binaryID.uuid, " === ", binaryID.buffer);
/*
8a529060-04b1-11e9-9b52-31bbfe39da0e  ===  <Buffer 11 e9 04 b1 8a 52 90 609b 52 31 bb fe 39 da 0e>
*/
```

```javascript
type BinaryUUID<UUID> = {|
  +uuid: UUID,
  +buffer: Buffer,
  toString(): UUID
|};

function createBinaryUUID(): BinaryUUID<string>;
```

### From Buffer to String UUID

If you have the `Buffer` and want to convert it to the string representation:

```javascript
import createBinaryUUID, { fromBinaryUUID } from "binary-uuid";

const binaryID = createBinaryUUID();

console.log(fromBinaryUUID(binaryID.buffer), " === ", binaryID.uuid);

/*
8a529060-04b1-11e9-9b52-31bbfe39da0e  ===  8a529060-04b1-11e9-9b52-31bbfe39da0e
*/
```

> **NOTE:** If you are not using `import` you may either use the named export `createBinaryUUID` `require('binary-uuid').createBinaryUUID` or use the `default` value (`require('binary-uuid').default`).

### From UUID to Binary UUID

If you have a UUID already and need it as the `binary(16)` form:

```javascript
import v1 from "uuid/v1";
import { toBinaryUUID } from "binary-uuid";

const uuid = v1();
const buf = toBinaryUUID(uuid);

console.log(uuid, " === ", buf);
/*
03540ac0-04b2-11e9-aa7b-1fa10c272537  ===  <Buffer 11 e9 04 b2 03 54 0a c0aa 7b 1f a1 0c 27 25 37>
*/
```
