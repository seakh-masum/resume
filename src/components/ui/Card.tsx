interface CardProps {
  header?: React.ReactNode;
  children?: React.ReactNode;
}

export const Card = (props: CardProps) => {
  return (
    // dark:bg-neutral-900 dark:text-white
    <div className="bg-accent rounded-xl p-4 relative text-black/90 block border border-border mb-4 ">
      {props.header && (
        <h1 className="text-2xl font-mono font-semibold pt-0 pb-4 dark:text-white">
          {props.header}
        </h1>
      )}
      {props.children}
    </div>
  );
};
