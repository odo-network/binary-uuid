const bin = require("binary-uuid");

const binaryID = bin.createBinaryUUID();

console.log(binaryID.uuid, " === ", binaryID.buffer);
