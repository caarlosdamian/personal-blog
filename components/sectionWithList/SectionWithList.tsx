import { CustomLink } from '../customLink/CustomLink';
import { List } from '../list/List';
import { SectionTitle } from '../sectionTitle/SectionTitle';

interface Post {
  _id: string | null | undefined;
  title: string;
  publishedAt: string;
  description?: string;
}

interface Props<T> {
  elements: T | Post[];
  title: string;
  description?: string;
  elementsWithDescription?: boolean;
  link?: {
    to: string;
    label: string;
  };
}

export const SectionWithList = <T,>({
  elements,
  title,
  description,
  link,
  elementsWithDescription = false,
}: Props<T>) => {
  return (
    <section className="flex flex-col py-8 border-t-[1px] border-t-neutral-200 dark:border-t-neutral-700 gap-8 pb-8 lg:pb-12">
      <SectionTitle title={title} />
      {description && <h3>{description}</h3>}
      <List
        elements={elements as []}
        elementsWithDescription={elementsWithDescription}
      />
      {link && <CustomLink label={link.label} to={link.to} />}
    </section>
  );
};
