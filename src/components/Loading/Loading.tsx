import "./style.css";

const Loading = () => {
  return (
    <div className="loading" role="status">
      <span className="loading__bar" />
      <span className="sr-only">Loading…</span>
    </div>
  );
};

export default Loading;
