interface Props {
  label: string;
  withOutBorder?: boolean;
}

export const Title = ({ label, withOutBorder }: Props) => {
  return (
    <div className="flex flex-col relative w-fit">
      <h1 className="z-10 relative text-light-700_dark-0 text-3-5xl font-bold leading-10 -tracking-[0.5px]">
        {label}
      </h1>
      {!withOutBorder && (
        <hr className="w-full absolute bottom-1 border-none h-2 bg-blue-500" />
      )}
    </div>
  );
};
