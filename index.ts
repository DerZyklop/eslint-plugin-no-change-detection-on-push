import { noChangeDetectionOnPush } from './rules/no-change-detection-on-push';

const plugin = {
	meta: {
		name: "eslint-plugin-no-change-detection-on-push",
		version: "1.0.0"
	},
	rules: {
		'no-change-detection-on-push': noChangeDetectionOnPush, 
	}
};

export default plugin;
