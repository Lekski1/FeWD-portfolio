import  styles  from '../../styles/css_index/contact.module.css';

export default function Contact() {
  return (
    <div id={styles.content}>
      <div id={styles.table_block}>
        <table>
          <thead>
            <tr>
              <th className={styles.top_column}>Date</th>
              <th className={styles.top_column}>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.date_cell}>Monday</td>
              <td className={styles.time_cell}>9:00-21:00</td>
            </tr>
            <tr>
              <td className={styles.date_cell}>Tuesday</td>
              <td className={styles.time_cell}>9:00-21:00</td>
            </tr>
            <tr>
              <td className={styles.date_cell}>Wednesday</td>
              <td className={styles.time_cell}>9:00-21:00</td>
            </tr>
            <tr>
              <td className={styles.date_cell}>Thursday</td>
              <td className={styles.time_cell}>9:00-21:00</td>
            </tr>
            <tr>
              <td className={styles.date_cell}>Friday</td>
              <td className={styles.time_cell}>9:00-21:00</td>
            </tr>
            <tr>
              <td className={styles.date_cell}>Saturday</td>
              <td className={styles.time_cell}>9:00-21:00</td>
            </tr>
            <tr>
              <td className={styles.date_cell}>Sunday</td>
              <td className={styles.time_cell}>weekend</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id={styles.my_contact}>
        <p id={styles.please_write}>please write to me only at the time I specified, so our dialogue will be built much better 😊</p>
        <a href="https://t.me/eldarlek" target="_blank" className={styles.technical_profiles_link}>
          <img src="/icon/telegram.png" alt="Contact" /> Telegram
        </a>
        <a href="mailto:e.mametov@innopolis.university" target="_blank" className={styles.technical_profiles_link} >
          <img src="/icon/mail.png" alt="Contact" /> e.mametov@innopolis.university
        </a>
        <a href="https://www.instagram.com/55_eldar" target="_blank" className={styles.technical_profiles_link} >
          <img src="/icon/Instagram.png" alt="Contact" /> Instagram*
        </a>
        <p>*a social network banned on the territory of the Russian Federation</p>
      </div>
    </div>
  );
};
