import * as React from 'react';
import OriginalMarkdown, { Options } from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Markdown = (props: Options) => {
  const { children, remarkPlugins, ...otherProps } = props;
  return (
    <OriginalMarkdown {...otherProps} remarkPlugins={[remarkGfm, ...(remarkPlugins || [])]}>
      {(props.children || '').toString()}
    </OriginalMarkdown>
  );
};
export default Markdown;
Markdown.displayName = 'YuntiReactMarkdownLowcodeMaterials';
export type MarkdownProps = Options;
