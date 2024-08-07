import css from "./HomePage.module.css";
import { FcManager } from "react-icons/fc";

export default function HomePage() {
  return (
    <div>
      <h1 className={css.title}>
        Contact manager welcome page <FcManager />
      </h1>
    </div>
  );
}
