import ReactMarkdown from 'react-markdown';
import markdownParser from 'lib/markdownParser';
import { useEffect } from 'react';

interface MarkdownToHtmlProps {
  title: string;
  className: string;
}
type ObjectProps = {
  meta: { title: string };
  content: string;
};

export default async function MarkdownToHtml({
  title,
  className,
}: MarkdownToHtmlProps) {
  const markdowns = await markdownParser();
  const data = markdowns.find((item) => item?.meta?.title === title);

  return <ReactMarkdown className={className}>{data?.content}</ReactMarkdown>;
}
