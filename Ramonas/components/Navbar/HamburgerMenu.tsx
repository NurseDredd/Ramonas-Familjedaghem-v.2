interface HamburgerMenuProps {
  open: boolean;
  onClick: () => void;
}

export default function HamburgerMenu({ open, onClick }: HamburgerMenuProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Huvudmeny"
      aria-expanded={open}
      aria-controls="main-nav"
      className="md:hidden p-2 rounded-lg hover:bg-amber-50 focus:outline-none focus-visible:ring-2 ring-amber-500 transition-all duration-300"
    >
      <div className="w-6 h-5 relative flex flex-col justify-between">
        <span
          className={`w-full h-0.5 bg-amber-700 rounded-full transform transition-all duration-300 ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`w-full h-0.5 bg-amber-700 rounded-full transition-all duration-300 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`w-full h-0.5 bg-amber-700 rounded-full transform transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </div>
    </button>
  );
}
