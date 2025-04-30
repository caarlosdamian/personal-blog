import { SectionWithList } from '@/components/sectionWithList/SectionWithList';
import { getPostsByLocale } from '@/lib/actions/posts';
import { getActualLocale } from '@/lib/helpers';
import { headers } from 'next/headers';

const BlogPage = async () => {
  const headersList = await headers();

  const locale = headersList.get('accept-language') as string;
  const actualLocale = getActualLocale(locale);
  const data = await getPostsByLocale({ locale: actualLocale });
  const posts = JSON.parse(data?.posts || '');

  return (
    <div>
      <SectionWithList description='Below are all my recent blog posts. Click on any title to read the full article.' title="Articles" elements={posts as []} />
    </div>
  );
};

export default BlogPage;
