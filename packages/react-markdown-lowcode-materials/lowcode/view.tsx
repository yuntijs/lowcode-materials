import React from 'react';

import Markdown from '../src';

// 不需要对设计态进行特殊处理的，直接导出即可
const DesignMarkdown = props => {
  const { children, ...otherProps } = props;
  return (
    <div>
      <Markdown
        {...otherProps}
        components={{
          // 解决编辑态 a 链接跳转问题
          a(props) {
            const { href, ...rest } = props;
            return <a {...rest} />;
          },
          ...otherProps.components,
        }}
      >
        {(children || '').toString()}
      </Markdown>
    </div>
  );
};
export default DesignMarkdown;
