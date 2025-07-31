import React from 'react';
import styles from './Footer.module.scss';
import ClickableLogo from '../ClickableLogo';

const dayOfWeek = () =>
  typeof Intl === 'object' && typeof Intl.DateTimeFormat === 'function'
    ? new Intl.DateTimeFormat('default', { weekday: 'long' }).format(new Date())
    : 'day';

export default () => (
  <div id="target_contact_us" className={styles['footer']}>
    <div className={styles['card']}>
      <ClickableLogo />
      <div className={styles['card-body']}>
        <div className={styles['description-content-container']}>
          <b>
            <a href="/privacy">Privacy Policy</a>
            <br />
            <a href="/privacy#terms-of-service">Terms of Service</a>
            <br />
            <br />
            <i>{`Enjoy the rest of your ${dayOfWeek()}!`}</i>
          </b>
        </div>
      </div>
    </div>
  </div>
);
