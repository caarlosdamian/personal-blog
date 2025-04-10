'use client';
import Link from 'next/link';

// import { seed } from "@/lib/actions/seed";

interface Props<T> {
  elements: T[];
  elementsWithDescription?: boolean;
}

export const List = <
  T extends {
    id: string | number;
    title: string;
    publishedAt: string;
    description?: string;
  }
>({
  elements,
  elementsWithDescription = true,
}: Props<T>) => {
  return (
    <ul aria-label="element-list" className="space-y-4">
      {/* <button onClick={()=>seed()}>clickeame</button> */}
      {elements?.map((element) => (
        <li key={element.id}>
          <Link href={`/articles/${element.id}`} className='flex flex-col gap-2'>
            <h3 className="text-light-700_dark-0 font-semibold text-xl leading-10 -tracking-[0.5px]">
              {element.title}
            </h3>
            <p
              className="text-sm text-light-600_dark-400"
              aria-label="Published date"
            >
              {new Date(element.publishedAt).toLocaleDateString('en-US', {
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
        </li>
      ))}
    </ul>
  );
};
