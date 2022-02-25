import { useState } from "react";
import { MdAdd, MdClose, MdLocationPin, MdOutlineRemove, MdOutlineSearch } from "react-icons/md";

const SearchForm = ({removeSeachForm}) => {
  const [locationState, setLocationState] = useState("Helsinki, Finland");
  const [guestState, setGuestState] = useState("4 guests");
  const [showLocation, setShowLocation] = useState(false);
  const [showGuest, setShowGuest] = useState(false);
  const [adultCounter, setAdultCounter] = useState(0);
  const [childCounter, setChildCounter] = useState(0);

  const activeLocation = (e) => {
    setLocationState(e.target.value);
  };

  const activeGuest = (e) => {
    setGuestState(e.target.value);
  };

  const toggleLocation = () => {
    setShowGuest(false);
    setShowLocation(true);
  }

  const toggleGuest = () => {
    setShowLocation(false);
    setShowGuest(true);
  }

  const adultCounterIncrement = () => {
    if(adultCounter < 10){
    setAdultCounter(adultCounter+1);
    }
  }

  const adultCounterDecrement = () => {
      if(adultCounter !== 0){
        setAdultCounter(adultCounter-1);
    }
  }
  const childCounterIncrement = () => {
    if(childCounter < 10){
    setChildCounter(childCounter+1);
    }
  }

  const childCounterDecrement = () => {
      if(childCounter !== 0){
        setChildCounter(childCounter-1);
    }
  }

  return (
    <div className="search-form">
      <div className="container">
      <div className="flex-between mb-32 showMob">
        <p>Edit your search</p>
        <MdClose style={{width: '24px', height: '24px', cursor: 'pointer'}} onClick={removeSeachForm} />
      </div>
        <div className="search-group">
          <div className="input-group box-shadow">
            <div className="input-group-wrapper">
              <label htmlFor="location" className="input-label">
                Location
              </label>
              <input
                type="text"
                value={locationState}
                className="input-control"
                placeholder="Add location"
                id="location"
                onChange={activeLocation}
                onClick={toggleLocation}
              />
            </div>
            {showLocation && <ul className="location-list font-Mulish hideMob">
              <li className="location-item">
                <MdLocationPin /> <span>Helsinki, Finland</span>
              </li>
              <li className="location-item">
                <MdLocationPin /> <span>Turku, Finland</span>
              </li>
              <li className="location-item">
                <MdLocationPin /> <span>Oulu, Finland</span>
              </li>
              <li className="location-item">
                <MdLocationPin /> <span>Vaasa, Finland</span>
              </li>
            </ul>}
          </div>
          <div className="input-group box-shadow">
            <div className="input-group-wrapper">
              <label htmlFor="guest" className="input-label">
                Guest
              </label>
              <input
                type="text"
                value={guestState}
                placeholder="Add guests"
                className="input-control"
                onChange={activeGuest}
                id="guest"
                onClick={toggleGuest}
              />
            </div>
            {showGuest && 
            <ul className="guest-list hideMob">
                <li className="guest-item">
                    <label>Adults</label>
                    <label className="grayText">Ages 13 or above</label>
                    <div className="counter">
                        <button onClick={adultCounterDecrement}><MdOutlineRemove /></button>
                        <button>{adultCounter}</button>
                        <button onClick={adultCounterIncrement}><MdAdd /></button>
                    </div>
                </li>
                <li className="guest-item">
                    <label>Children</label>
                    <label className="grayText">Ages 2-12</label>
                    <div className="counter">
                        <button onClick={childCounterDecrement}><MdOutlineRemove /></button>
                        <button>{childCounter}</button>
                        <button onClick={childCounterIncrement}><MdAdd /></button>
                    </div>
                </li>
            </ul>
            }
          </div>
          {showLocation && <ul className="location-list font-Mulish showMob">
              <li className="location-item">
                <MdLocationPin /> <span>Helsinki, Finland</span>
              </li>
              <li className="location-item">
                <MdLocationPin /> <span>Turku, Finland</span>
              </li>
              <li className="location-item">
                <MdLocationPin /> <span>Oulu, Finland</span>
              </li>
              <li className="location-item">
                <MdLocationPin /> <span>Vaasa, Finland</span>
              </li>
            </ul>}

            {showGuest && 
            <ul className="guest-list showMob">
                <li className="guest-item">
                    <label>Adults</label>
                    <label className="grayText">Ages 13 or above</label>
                    <div className="counter">
                        <button onClick={adultCounterDecrement}><MdOutlineRemove /></button>
                        <button>{adultCounter}</button>
                        <button onClick={adultCounterIncrement}><MdAdd /></button>
                    </div>
                </li>
                <li className="guest-item">
                    <label>Children</label>
                    <label className="grayText">Ages 2-12</label>
                    <div className="counter">
                        <button onClick={childCounterDecrement}><MdOutlineRemove /></button>
                        <button>{childCounter}</button>
                        <button onClick={childCounterIncrement}><MdAdd /></button>
                    </div>
                </li>
            </ul>
            }
          <div className="box-shadow">
            <div className="input-group-wrapper">
              <div
                className="flex-between"
                style={{ justifyContent: "center", padding: '4px 0' }}
              >
                <button className="search-btn" title="Search" onClick={removeSeachForm}>
                  <MdOutlineSearch /> Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
