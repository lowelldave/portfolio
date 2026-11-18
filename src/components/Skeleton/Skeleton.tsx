import "./style.css";

interface ISkeleton {
  /** How many placeholder blocks to render. */
  count?: number;
  /** Shape that mirrors the real content, so nothing jumps when data arrives. */
  variant: "tile" | "card" | "row" | "block";
}

/** Renders placeholder blocks *inside* the real grid/list container. */
const Skeleton = ({ count = 3, variant }: ISkeleton) => {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className={`skeleton skeleton--${variant}`} aria-hidden="true" />
      ))}
      <span className="sr-only" role="status">
        Loading…
      </span>
    </>
  );
};

export default Skeleton;
