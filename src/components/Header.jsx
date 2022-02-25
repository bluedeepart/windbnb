import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../src/logo.svg";
import SearchForm from "./SearchForm";

const Header = () => {
  const [locationState, setLocationState] = useState("Helsinki, Finland");
  const [guestState, setGuestState] = useState("");
  const [showSearchForm, setShowSearchForm] = useState(false);

  const activeLocation = (e) => {
    setLocationState(e.target.value);
  };

  const activeGuest = (e) => {
    setGuestState(e.target.value);
  };

  const toggleSeachForm = () => {
    setShowSearchForm(!showSearchForm);
    if (document.body.classList.contains("search-open")) {
      document.body.classList.remove("search-open");
    } else {
      document.body.classList.add("search-open");
    }
  };

  const removeSeachForm = () => {
    setShowSearchForm(false);
    document.body.classList.remove("search-open");
  };

  return (
    <>
      <SearchForm removeSeachForm ={removeSeachForm}/>
      <div className="backdrop-overlay" onClick={removeSeachForm}></div>
      <header>
        <div className="container">
          <div className="flex-between">
            <div className="site-logo">
              <Link to="/windbnb">
                <Logo />
              </Link>
            </div>

            <div className="search-group search-group-header">
              <div className="input-group">
                <input
                  type="text"
                  value={locationState}
                  className="input-control"
                  placeholder="Add location"
                  id="location"
                  onChange={activeLocation}
                  onClick={toggleSeachForm}
                />
                <label htmlFor="location" className="input-label">
                  Location
                </label>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  value={guestState}
                  placeholder="Add guests"
                  className="input-control"
                  onChange={activeGuest}
                  onClick={toggleSeachForm}
                  id="guest"
                />
                <label htmlFor="guest" className="input-label">
                  Guest
                </label>
              </div>
              <button
                className="search-btn search-btn-header"
                title="Search"
                onClick={toggleSeachForm}
              >
                <MdOutlineSearch />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
