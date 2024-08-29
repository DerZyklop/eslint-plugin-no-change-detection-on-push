import { ESLintUtils } from '@typescript-eslint/utils';

const createRule = ESLintUtils.RuleCreator(name => `https://example.com/rule/${name}`);

export const noChangeDetectionOnPush = createRule({
  name: 'no-change-detection-on-push',
  meta: {
    docs: {
      description:
        'Ban the usage of ChangeDetectionStrategy.OnPush as it can cause confusion and issues caused by it are difficult to debug',
    },
    messages: {
      default: 'ChangeDetectionStrategy.OnPush is not allowed',
    },
    type: 'problem',
    schema: [],
    fixable: 'code',
  },
  defaultOptions: [],
  create(context, optionsWithDefault) {
      return {
        Decorator(node) {
          const value = node.expression.arguments[0].properties.find(item => item.key.name === 'changeDetection').value;
          if (value.object.name === 'ChangeDetectionStrategy' && value.property.name === 'OnPush') {
            context.report({
              messageId: 'default',
              node: node,
              fix: (fixer) => fixer.replaceText(value.property, 'Default'),
            });
          }
        }
      }
  },
});
