# os-check

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
