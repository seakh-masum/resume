interface CardProps {
  header?: React.ReactNode;
  children?: React.ReactNode;
}

export const Card = (props: CardProps) => {
  return (
    <div
      className={`bg-accent block rounded-xl p-4 relative text-text mb-4 shadow-theme print:shadow-none`}
    >
      {props.header && (
        <h1 className="text-2xl font-mono font-semibold pt-0 pb-4 dark:text-white">
          {props.header}
        </h1>
      )}
      {props.children}
    </div>
  );
};
