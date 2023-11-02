import React from 'react';
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
Markdown.displayName = 'ReactMarkdownLowcode';
export default Markdown;
export type MarkdownProps = Options;
