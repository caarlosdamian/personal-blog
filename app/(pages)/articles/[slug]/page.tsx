import { getPost } from '@/lib/actions/posts';
// import Markdown from 'react-markdown';
// import remarkGfm from 'remark-gfm'


const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;

  const data = await getPost({ postId: slug as unknown as number });
  console.log(data);
  return (
    <div className='text-light-600_dark-400'>
      {/* <Markdown remarkPlugins={[remarkGfm]} >{data[0]?.content}</Markdown> */}
    </div>
  );
};

export default BlogPage;
