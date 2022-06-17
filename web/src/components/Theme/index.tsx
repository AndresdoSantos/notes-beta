type ThemeProps = {
  children: JSX.Element | JSX.Element[];
};

const Theme = ({ children }: ThemeProps) => {
  return (
    <main className="bg-[#1D1B1D] h-screen w-full overflow-hidden py-10 px-4">
      <main className="flex flex-col items-start bg-inherit mx-auto max-w-7xl h-full">
        {children}
      </main>
    </main>
  );
};

export { Theme };
