import Button from "../Button/Button";
import styles from "./ContactForm.module.css"

const ContactForm = () => {
    return(
        <select className={styles.container}>
            <div className={styles.contact_form}>
            <Button />
            </div>
            <div className={styles.contact_image}></div>
        </select>

    )
};
export default ContactForm;