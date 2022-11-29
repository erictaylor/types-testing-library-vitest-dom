# types-testing-library-vitest-dom

## Installation (Yarn)

```json
"resolutions": {
  "@types/testing-library__jest-dom": "github:erictaylor/types-testing-library-vitest-dom"
}
```

## Installation (NPM)

```json
"overrides": {
  "@types/testing-library__jest-dom": "github:erictaylor/types-testing-library-vitest-dom"
}
```

## Test Setup File

```ts
import matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";

expect.extend(matchers);
```

# Summary

This package contains type definitions for [@testing-library/jest-dom](https://github.com/testing-library/jest-dom) to be used with Vitest without using all the Jest global typing.
