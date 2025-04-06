import { List } from '../list/List';
import { SectionTitle } from '../sectionTitle/SectionTitle';

interface Props<T> {
  elements: T[];
  title: string;
  description?: string;
}

export const SectionWithList = <T,>({
  elements,
  title,
  description,
}: Props<T>) => {
  return (
    <section className="flex flex-col py-8 border-t-[1px] border-t-neutral-200 dark:border-t-neutral-700">
      <SectionTitle title={title} />
      {description && <h3>{description}</h3>}
      <List elements={[]} />
    </section>
  );
};
