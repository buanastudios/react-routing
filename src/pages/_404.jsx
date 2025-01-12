import "./_404.css";

const _404 = () => {
  return (
    <div className="not-found-wrapper">
      <p className="not-found-code">404</p>
      <p className="not-found-copy">Page is not found :( </p>
      <a href="/">back to homepage</a>
    </div>
  );
};

export default _404;
