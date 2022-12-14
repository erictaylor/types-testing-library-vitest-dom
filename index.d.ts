// Type definitions for @testing-library/jest-dom 5.14 (with Vitest)
// Project: https://github.com/testing-library/jest-dom
// Definitions by: Eric Taylor <https://github.com/erictaylor>
//                 Ernesto García <https://github.com/gnapse>
//                 John Gozde <https://github.com/jgoz>
//                 Seth Macpherson <https://github.com/smacpherson64>
//                 Andrew Leedham <https://github.com/AndrewLeedham>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.3

import { TestingLibraryMatchers } from "./matchers";

declare global {
  namespace Vi {
    interface JestAssertion extends TestingLibraryMatchers<any, void> {}
  }
}
