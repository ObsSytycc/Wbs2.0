import React from 'react'
import FooterLink from './FooterLink';

const FooterNavList = ({ title = '', list = [] }) => {
  return (
    <section className="subnav-list-container">
      <h3>{title}</h3>
      <ul className="footer-nav-list">
        {
          list.map((link, indx) => {
            const {name, path} = link;

            return (
              <FooterLink key={indx + 1} name={name} path={path} />
            )
          })
        }
      </ul>
    </section>
  )
}

export default FooterNavList