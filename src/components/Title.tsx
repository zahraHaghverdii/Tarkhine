type TitleProps = {
  title: string;
};

export default function Title({ title }: TitleProps) {
  return (
    <div className="w-full text-center text-2xl">
      <h4 className="text-[var(--Gray-9)]">{title}</h4>
    </div>
  );
}
