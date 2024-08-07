import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <p>
      Not found page. Go to <Link to="/">home page</Link>
    </p>
  );
}
