import React from 'react'
import { Link } from 'react-router-dom'

const FooterColumn = ({
  listData = {
    title: '',
    list: [{ url: '', text: '' }],
  },
}) => {
  const headingStyles = 'font-bold mb-5'
  const listStyles = 'space-y-3'

  return (
    <div>
      <h4 className={headingStyles}>{listData.title}</h4>
      <ul className={listStyles}>
        {listData.list.map((el, i) => (
          <li key={i}>
            <Link to={el.url}>{el.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterColumn
