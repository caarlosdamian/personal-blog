import { SectionWithList } from '@/components/sectionWithList/SectionWithList';
import { getPosts } from '@/lib/actions/posts';

const BlogPage = async () => {
  const data = await getPosts({ pageSize: 10 });

  return (
    <div>
      <SectionWithList title="Articles" elements={data?.posts as []} />
    </div>
  );
};

export default BlogPage;
