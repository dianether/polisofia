import {
  faCommentMedical,
  faHouse,
  faUserLarge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useUser } from "../Context/UserContext";

function Footer() {
  const { needUser } = useUser();
  return (
    <footer>
      <div>
        ~<FontAwesomeIcon icon={faHouse} />~
      </div>
      <div>
        ~<FontAwesomeIcon icon={faCommentMedical} />~
      </div>
      <div onClick={() => needUser()}>
        ~<FontAwesomeIcon icon={faUserLarge} />~
      </div>
    </footer>
  );
}

export default Footer;
