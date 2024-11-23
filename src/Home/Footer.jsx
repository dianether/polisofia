import { faCommentMedical, faHouse, faUserLarge } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <footer>
      <div>
        ~<FontAwesomeIcon icon={faHouse} />~
      </div>
      <div>
        ~<FontAwesomeIcon icon={faCommentMedical} />~
      </div>
      <div>
        ~<FontAwesomeIcon icon={faUserLarge} />~
      </div>
    </footer>
  )
}

export default Footer