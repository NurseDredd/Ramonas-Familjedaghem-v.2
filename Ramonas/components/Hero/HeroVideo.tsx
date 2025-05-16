// const HeroVideo = ({
//   videoRef,
//   poster,
//   ariaLabel,
// }: {
//   videoRef: React.RefObject<HTMLVideoElement | null>;
//   poster: string;
//   ariaLabel: string;
// }) => (
//   <div className="w-full h-full ">
//     <video
//       ref={videoRef}
//       poster={poster}
//       aria-label={ariaLabel}
//       className="w-full h-full object-cover"
//       autoPlay
//       muted
//       loop
//       playsInline
//       preload="auto"
//       style={{ zIndex: 0 }}
//     >
//       <source src="heroVideo.mp4" type="video/mp4" />
//     </video>
//   </div>
// );

// export default HeroVideo;

const HeroVideo = ({
  videoRef,
  poster,
  ariaLabel,
  className,
}: {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  poster: string;
  ariaLabel: string;
  className: string;
}) => (
  <video
    ref={videoRef}
    poster={poster}
    aria-label={ariaLabel}
    className={className}
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
  >
    <source src="heroVideo.mp4" type="video/mp4" />
  </video>
);

export default HeroVideo;
