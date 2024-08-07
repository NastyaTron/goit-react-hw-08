import { FaPhone } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.item}>
      <div>
        {" "}
        <p className={css.text}>
          {" "}
          <IoMdContact className={css.icon} size="24px" />
          {name}
        </p>
        <p className={css.text}>
          <FaPhone className={css.icon} size="20px" />
          {number}
        </p>
      </div>
      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
