interface Props {
  title: string;
}

export const SectionTitle = ({ title }: Props) => {
  return (
    <div className="flex items-end gap-2.5">
      <h2 className="text-neutral-700 dark:text-neutral-0 text-3-5xl font-extrabold leading-10 -tracking-[0.5px] font-dm">
        {title}
      </h2>
      <hr className="border-none h-[3px] bg-blue-700 w-10 m-2"  />
    </div>
  );
};
