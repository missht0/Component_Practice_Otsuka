import { React } from 'react';
import './index.less';

const Footer = ({ data }) => {
  return (
    <footer>
      <div className="footer__utility">
        {data.utility.map((item, index) => {
          return (
            <div className="footer__utility__item" key={index}>
              {item}
            </div>
          );
        })}
      </div>
      <div className="footer__group">
        {data.group__list.map((item, index) => {
          return (
            <div className="footer__group__item" key={index}>
              {item}
            </div>
          );
        })}
      </div>
      <div className="footer__inner">
        <div className="footer__inner__logo">
          <img src={data.inner.logo__image} alt="Otsuka-people" />
          <p>{data.inner.logo__text}</p>
        </div>
        <div className="footer__inner__label">{data.inner.label}</div>
      </div>
    </footer>
  );
};

export default Footer;
