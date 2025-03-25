# os-check

<p align="center">
  <a href="https://www.npmjs.com/package/os-check">
    <img src="https://img.shields.io/npm/v/os-check.svg" alt="npm version">
  </a>
  <a href="https://badgen.net/bundlephobia/min/os-check">
    <img src="https://badgen.net/bundlephobia/min/os-check&cache-control=no-cache" alt="minified">
  </a>
  <a href="https://badgen.net/bundlephobia/minzip/os-check">
    <img src="https://badgen.net/bundlephobia/minzip/os-check&cache-control=no-cache" alt="minified + gzipped">
  </a>
</p>

<p align="center">
  <a href="https://github.com/maifeeulasad/os-check/stargazers">
    <img src="https://img.shields.io/github/stars/maifeeulasad/os-check" alt="GitHub stars">
  </a>
  <a href="https://github.com/maifeeulasad/os-check/watchers">
    <img src="https://img.shields.io/github/watchers/maifeeulasad/os-check" alt="GitHub watchers">
  </a>
  <a href="https://img.shields.io/github/commits-since/maifeeulasad/os-check/latest/main?include_prereleases">
    <img src="https://img.shields.io/github/commits-since/maifeeulasad/os-check/latest/main?include_prereleases" alt="Commits after release">
  </a>
</p>

NPM : https://www.npmjs.com/package/os-check

```
npm install os-check
yarn add os-check
```

## Code
 - codesandbox: https://codesandbox.io/s/os-check-example-hro7y6?file=/src/App.tsx
 - Usage:
 ```
 import React, { useEffect } from "react";

import { osCheck, OsType } from "os-check";

const App = () => {
  useEffect(() => {
    // only for testing purposes
    // alert(osCheck())
  }, []);
  return (
    <div>
      <h1>{osCheck()}</h1>
      <h1>{osCheck() === OsType.Windows && "Windows-hmmm"}</h1>
      <h1>{osCheck() === OsType.Linux && "Linux-hmmm"}</h1>
    </div>
  );
};

export default App;
 ```
