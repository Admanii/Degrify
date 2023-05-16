interface Props {
  text: string;
}
export const Loader = ({ text }: Props) => {
  return (
    <div className="flex flex-1 justify-center text-lg bg-white h-screen rounded-lg rounded-t-none font-bold">
      <p className="mt-4">{text}...</p>
    </div>
  );
};
