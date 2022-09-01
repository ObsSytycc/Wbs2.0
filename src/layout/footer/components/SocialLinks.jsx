import React from 'react'

const SocialLinks = ({ list }) => {
  return (
    <ul className="social-media-list">
      {
        list.map((item, indx) => {

          return (
            <li key={indx + 1}>
              <a href={item.path}>{item.icon()}</a>
            </li>
          )
        })
      }
    </ul>
  )
}

export default SocialLinks