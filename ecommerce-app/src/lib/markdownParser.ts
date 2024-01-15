import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';
/*import fs from 'fs/promises';
import { cache } from 'react';*/

const markdownDirectory = 'src/markdown';

// `cache` is a React 18 feature that allows you to cache a function for the lifetime of a request.
// this means getPosts() will only be called once per page build, even though we may call it multiple times
// when rendering the page.
const markdownParser = async () => {
  const allMarkdownFiles = fs.readdirSync(markdownDirectory);
  const markdown = allMarkdownFiles
    .filter((file) => path.extname(file) === '.mdx')
    .map((file) => {
      const filePath = `${markdownDirectory}/${file}`;
      const postContent = fs.readFileSync(filePath, 'utf8');
      //const slug = file.replace('.mdx', '');
      const { data: meta, content } = matter(postContent);
      return { meta, content };
    });
  return markdown;
};

export default markdownParser;
