"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
function fromBinaryUUID(buf) {
    return [
        buf.toString('hex', 4, 8),
        buf.toString('hex', 2, 4),
        buf.toString('hex', 0, 2),
        buf.toString('hex', 8, 10),
        buf.toString('hex', 10, 16),
    ].join('-');
}
exports.fromBinaryUUID = fromBinaryUUID;
function toBinaryUUID(uuid) {
    const buf = Buffer.from(uuid.replace(/-/g, ''), 'hex');
    return Buffer.concat([
        buf.slice(6, 8),
        buf.slice(4, 6),
        buf.slice(0, 4),
        buf.slice(8, 16),
    ]);
}
exports.toBinaryUUID = toBinaryUUID;
function createBinaryUUID() {
    const uuid = uuid_1.v1();
    return Object.assign(Object.create({ toString: () => uuid }), {
        uuid,
        buffer: toBinaryUUID(uuid),
    });
}
exports.createBinaryUUID = createBinaryUUID;
exports.default = createBinaryUUID;
//# sourceMappingURL=binary-uuid.js.map