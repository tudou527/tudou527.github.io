---
title: mall 项目示例
gapless: true
inline: true
---

```jsx
/**
 * inline: true
 */

import React from 'react';

import ApiDoc from '../../src/ApiDoc';
import data from './mall.json';

export default () => <ApiDoc project={'macrozheng/mall'} schema={data.http} />;
```
