import { HiPlay, HiPause } from "react-icons/hi";

interface Props {
  isPlaying: boolean;
  onClick: () => void;
  ariaLabel: string;
  className?: string;
}

const PlayPauseButton = ({
  isPlaying,
  onClick,
  ariaLabel,
  className,
}: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg ${className}`}
      aria-label={ariaLabel}
    >
      {isPlaying ? <HiPause size={24} /> : <HiPlay size={24} />}
    </button>
  );
};

export default PlayPauseButton;
