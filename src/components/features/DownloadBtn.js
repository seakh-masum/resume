export const DownloadBtn = () => {
  const downloadLink =
    "https://drive.google.com/uc?export=download&id=1wFlDhiZhSYjl1mwk5tFzDulh3DqP9f4F";
  return (
    <a
      onClick={() => window.print()}
      target="_blank"
      rel="noreferrer"
      className="no-print animate-bounce grid place-content-center rounded-full fixed bottom-3 right-3 z-50 w-12 aspect-square bg-gradient-to-r from-sky-500 to-indigo-500 shadow-md"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#FFFFFF"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5z" />
      </svg>
    </a>
  );
};
