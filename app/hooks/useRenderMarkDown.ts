import { Remarkable } from 'remarkable';

export const useRenderMarkDown = (markdown: string) => {
  const md = new Remarkable();

  const renderedHTML = md.render(markdown);
  return { __html: renderedHTML };
};
