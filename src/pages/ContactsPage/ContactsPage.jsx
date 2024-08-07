import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsError, selectLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section>
      <h1 className={css.title}>Phonebook</h1>
      <div className={css.container}>
        <div>
          <ContactForm />
          {loading && <Loader />}
          {isError && <ErrorMessage />}
          {!isError && !loading && <SearchBox />}
        </div>
        <ContactList />
      </div>
    </section>
  );
}
