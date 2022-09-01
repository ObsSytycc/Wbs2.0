import React, { useState } from 'react'

import '../style/footer.css';
import { svgs } from '../../../assets';
import { footerSubNav, socialLink } from '../../../data';
import FooterNavList from './FooterNavList';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const [subNavList, setSubNavList] = useState(footerSubNav);
  const [socialMediaList, setSocialMediaList] = useState(socialLink);

  return (
    <footer id="footer">
      <div className="container">
        <section className="footer-content">
          <section className="footer-left">
            <div className="footer-brand">
              <img src={svgs.footer_logo} alt="" />
            </div>
            <div>
              {
                subNavList.map((navItem, indx) => {
                  const { title, links } = navItem;

                  return (
                    <FooterNavList title={title} list={links} />
                  )
                })
              }
            </div>
          </section>
          <section className="footer-right">
            <div>
              <a href="tel:+234-790-2784-987">+234-790-2784-987</a>
              <a href="mailto:support@sytycc.com">support@sytycc.com</a>
              <p>Lekki Phase 2 Ext, Lagos State, Nigeria</p>
            </div>
            <div>
              <SocialLinks list={socialMediaList} />
            </div>
          </section>
        </section>
      </div>
    </footer>
  )
}

export default Footer;