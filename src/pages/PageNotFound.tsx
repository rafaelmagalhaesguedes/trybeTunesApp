import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="page-not-found">
      <h1>Page not found! :X </h1>
      <Link to="/">Back to initial page ...</Link>
    </div>
  );
}

export default PageNotFound;
