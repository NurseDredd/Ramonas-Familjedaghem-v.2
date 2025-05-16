import Navbar from "../Navbar/Navbar";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex border-2 flex-row justify-between items-center py-2 px-6 md:p-8 bg-[rgba(245,239,230,0.9)]">
      <p className="text-xl  md:text-3xl">Ramonas familjedaghem</p>
      <Navbar />
    </header>
  );
};
