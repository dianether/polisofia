import { faLandmark } from "@fortawesome/free-solid-svg-icons/faLandmark";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Context/UserContext";

function Header() {
  const [page, setPage] = useState(window.location.pathname);
  const navigate = useNavigate();

  const { needUser } = useUser();

  const updateUrl = (url) => {
    if (page !== url) {
      setPage(url);
      navigate(url, { replace: false });
    }
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      const user = needUser();
      if (user) {
        if (user.comments) {
          navigate("/eco", { replace: true });
          setPage("/eco");
        } else {
          navigate("/siguiendo", { replace: true });
          setPage("/siguiendo");
        }
      } else {
        navigate("/para-ti", { replace: true });
        setPage("/para-ti");
      }
    }
  }, [page]);

  return (
    <header>
      <div className="icon">
        <FontAwesomeIcon icon={faLandmark} />
      </div>
      <div
        onClick={() => updateUrl("/eco")}
        className={page === "/eco" ? "active" : ""}
      >
        <h2>Eco</h2>
      </div>
      <div
        onClick={() => updateUrl("/siguiendo")}
        className={page === "/siguiendo" ? "active" : ""}
      >
        <h2>Siguiendo</h2>
      </div>
      <div
        onClick={() => updateUrl("/para-ti")}
        className={page === "/para-ti" ? "active" : ""}
      >
        <h2>Para ti</h2>
      </div>
      <div className="icon">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </header>
  );
}

export default Header;
