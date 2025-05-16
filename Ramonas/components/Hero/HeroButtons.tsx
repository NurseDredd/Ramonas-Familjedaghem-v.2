import { useCallback } from "react";

const HeroButtons = () => {
  // Smooth scroll helper
  const scrollToId = useCallback((id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full lg:flex-row">
      <button
        type="button"
        onClick={() => scrollToId("about")}
        className="flex items-center justify-center gap-2 bg-white text-gray-800 hover:bg-gray-100 px-6 py-3 rounded-lg shadow-md transition-all duration-200 w-full lg:w-1/2 font-medium min-h-[48px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        Läs mer
      </button>
      <button
        type="button"
        onClick={() => scrollToId("contact")}
        className="flex items-center justify-center gap-2 bg-amber-600 text-white hover:bg-amber-700 px-6 py-3 rounded-lg shadow-md transition-all duration-200 w-full lg:w-1/2 font-medium min-h-[48px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        Intresseanmälan
      </button>
    </div>
  );
};

export default HeroButtons;
