const noChangeDetectionOnPushRule = require("./rules/no-change-detection-on-push");
const plugin = { rules: { "no-change-detection-on-push": noChangeDetectionOnPushRule } };
module.exports = plugin;
