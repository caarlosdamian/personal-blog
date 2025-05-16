'use client';
import Link from 'next/link';

interface Props<T> {
  elements: T[];
  elementsWithDescription?: boolean;
}

export const List = <
  T extends {
    _id: string | null | undefined;
    title: string;
    publishedAt: string;
    description?: string;
    post: {
      publishedAt: string;
      slug: string;
    };
  }
>({
  elements,
  elementsWithDescription = true,
}: Props<T>) => {
  return (
    <ul aria-label="element-list" className="space-y-4">
      {elements?.map((element, index) => (
        <li key={element.post.slug}>
          <Link
            href={`/articles/${element.post.slug}`}
            className="flex flex-col gap-2"
          >
            <h3 className="text-light-700_dark-0 font-semibold text-xl leading-10 -tracking-[0.5px] hover:underline hover:opacity-70">
              {element.title}
            </h3>
            <p
              className="text-sm text-light-600_dark-400 italic"
              aria-label="Published date"
            >
              {new Date(element.post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            {elementsWithDescription && element.description && (
              <p className="text-base text-light-600_dark-400">
                {element.description}
              </p>
            )}
          </Link>
          {index !== elements?.length - 1 && (
            <hr className="h-[1px] border-none bg-neutral-200 dark:bg-neutral-700 my-5" />
          )}
          {/* quitar si es el ultimo todo: */}
        </li>
      ))}
    </ul>
  );
};
