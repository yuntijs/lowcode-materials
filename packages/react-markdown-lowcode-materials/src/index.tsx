import React from 'react';
import OriginalMarkdown, { Options } from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
const Markdown = (props: Options) => {
  const { children, rehypePlugins, remarkPlugins, ...otherProps } = props;
  return (
    <OriginalMarkdown
      {...otherProps}
      rehypePlugins={[rehypeHighlight, ...(rehypePlugins || [])]}
      remarkPlugins={[remarkGfm, ...(remarkPlugins || [])]}
    >
      {(props.children || '').toString()}
    </OriginalMarkdown>
  );
};
Markdown.displayName = 'ReactMarkdownLowcode';
export default Markdown;
export type MarkdownProps = Options;
