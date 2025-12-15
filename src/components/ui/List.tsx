interface ListProps {
  data: string[];
}

const List = ({ data }: ListProps) => {
  return (
    <ul className="flex flex-col gap-2 mt-2 ml-6">
      {data?.map((item, idx) => (
        <li key={idx} className="text-text-light text-sm list-disc">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
