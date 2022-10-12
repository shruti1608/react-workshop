import "./Button.css";

export default function Button({
  className = "",
  children,
  loading,
  ...props
}) {
  return (
    <button className={`btn customButton ${className}`} {...props}>
      <div style={{ visibility: loading ? "hidden" : "visible" }}>
        {children}
      </div>
      {loading && (
        <span className="btnSpinnerContainer">
          <span className="btnSpinner spinner-border" role="status" />
        </span>
      )}
    </button>
  );
}
