import * as vitest from 'vitest';
import { RuleTester } from '@typescript-eslint/rule-tester';
import { noChangeDetectionOnPush } from './no-change-detection-on-push';
import typescriptParser from "@typescript-eslint/parser";

RuleTester.afterAll = vitest.afterAll;
RuleTester.it = vitest.it;
RuleTester.itOnly = vitest.it.only;
RuleTester.describe = vitest.describe;

const ruleTester = new RuleTester({
});

ruleTester.run('no-change-detection-on-push', noChangeDetectionOnPush, {
  valid: [{
    code: `
      @Component({
        changeDetection: ChangeDetectionStrategy.Default
      })
      class MyComponent {}
    `,
  }],
  invalid: [{
    code: `
      @Component({
        changeDetection: ChangeDetectionStrategy.OnPush
      })
      class MyComponent {}
    `,
    output: `
      @Component({
        changeDetection: ChangeDetectionStrategy.Default
      })
      class MyComponent {}
    `,
    errors: [{ message: 'ChangeDetectionStrategy.OnPush is not allowed' }],
  }],
});
