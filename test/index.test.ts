import assert from 'node:assert/strict';

import { LogRotator } from '../src/index.js';

describe('test/index.test.ts', () => {
  it('should export LogRotator', () => {
    assert(LogRotator);
  });
});
