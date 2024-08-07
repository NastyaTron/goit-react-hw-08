import { useSelector } from "react-redux";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Loader from "../../components/Loader/Loader";
import { selectAuthError, selectAuthLoading } from "../../redux/auth/selectors";

export default function RegistrationPage() {
  const loading = useSelector(selectAuthLoading);
  const isError = useSelector(selectAuthError);

  return (
    <section>
      {loading && <Loader />}
      {isError && <p>Such user is already registered</p>}
      {!loading && !isError && <h2>Pegister your account</h2> && (
        <RegistrationForm />
      )}
    </section>
  );
}
