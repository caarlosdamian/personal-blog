import { Quote } from '@/components';
import { getPostBySlug } from '@/lib/actions/posts';
import { getBlockquoteType } from '@/lib/helpers';
import { PostI } from '@/types';
import console from 'console';
import { headers } from 'next/headers';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const headersList = await headers();
  const locale = headersList.get('accept-language') as string;
  const actualLocale =
    locale.split(',')[0] === 'en' || locale.split(',')[0] === 'es'
      ? locale.split(',')[0]
      : 'es';

  const data = (await getPostBySlug(slug, actualLocale)) as PostI;
  return (
    <div className="text-light-600_dark-400 markdown">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          blockquote(props) {
            const quoteType = getBlockquoteType(props.children);
            if (quoteType) {
              if (quoteType.hasOwnProperty('type')) {
                return <Quote {...props} {...quoteType} />;
              }
            }

            return <blockquote>{props.children}</blockquote>;
          },
        }}
      >
        {data && data.translations[0].content}
      </Markdown>
    </div>
  );
};

export default BlogPage;
