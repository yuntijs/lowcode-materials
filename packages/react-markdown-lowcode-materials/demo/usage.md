---
title: Simple Usage
order: 1
---

本 Demo 演示 Markdown 的用法。

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Markdown from '@yunti/react-markdown-lowcode-materials';

class App extends Component {
  render() {
    return (
      <div>
        <Markdown>
        ### 标题
        </Markdown>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
