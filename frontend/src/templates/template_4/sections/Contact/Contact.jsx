// import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <div className='contactFormTemplate'>
      <div id="contactFormTemplate" className={styles.contactContainer}>
        <h1 className="sectionTitle">Contact</h1>
        <form action="" className={styles.contactForm}>
          <div className="formGroup">
            <label htmlFor="name" hidden>
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className={`${styles.contactInput} ${styles.contactPlaceholder}`}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email" hidden>
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className={`${styles.contactInput} ${styles.contactPlaceholder}`}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="message" hidden>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              className={`${styles.contactTextarea} ${styles.contactPlaceholder}`}
              required></textarea>
          </div>
          <input
            className={`${styles.contactSubmit} hover btn`}
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
