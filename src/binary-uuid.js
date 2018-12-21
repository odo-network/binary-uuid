const v1 = require("uuid/v1");

function fromBinaryUUID(buf) {
  return [
    buf.toString("hex", 4, 8),
    buf.toString("hex", 2, 4),
    buf.toString("hex", 0, 2),
    buf.toString("hex", 8, 10),
    buf.toString("hex", 10, 16)
  ].join("-");
}

function toBinaryUUID(uuid) {
  const buf = Buffer.from(uuid.replace(/-/g, ""), "hex");
  return Buffer.concat([
    buf.slice(6, 8),
    buf.slice(4, 6),
    buf.slice(0, 4),
    buf.slice(8, 16)
  ]);
}

function createBinaryUUID() {
  const uuid = v1();
  return Object.freeze(
    Object.assign(
      Object.create({
        toString() {
          return uuid;
        }
      }),
      {
        uuid,
        buffer: toBinaryUUID(uuid)
      }
    )
  );
}

module.exports = createBinaryUUID;
module.exports.toBinaryUUID = toBinaryUUID;
module.exports.fromBinaryUUID = fromBinaryUUID;
module.exports.createBinaryUUID = createBinaryUUID;
module.exports.default = createBinaryUUID;
