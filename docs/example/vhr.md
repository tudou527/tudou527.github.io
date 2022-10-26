---
title: 微人事人力资源管理系统项目示例
gapless: true
inline: true
---

```jsx
/**
 * inline: true
 */

import React from 'react';

import ApiDoc from '../../src/ApiDoc';
import data from './vhr.json';

export default () => <ApiDoc project={'/lenve/vhr'} schema={data.http} />;
```
