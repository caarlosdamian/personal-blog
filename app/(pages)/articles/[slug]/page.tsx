import { Quote } from '@/components';
import { getBlockquoteType } from '@/lib/helpers';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;

  // const data = await getPost({ postId: slug as unknown as number });

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
        {/* {data && data[0]?.content} */}
      </Markdown>
    </div>
  );
};

export default BlogPage;
