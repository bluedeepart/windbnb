import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";
import staysDataList from "../data/stays";

const Main = () => {
//   console.log(staysDataList);

  return (
    <main>
      <div className="container">
        <div className="flex-between mb-32">
        <h2>Stays in Finland</h2>
        <p>12+ stays</p>
        </div>
        <div className="card-wrapper">
          {staysDataList.map((list, index) => (
            <div key={index} className="card">
              <div className="card-image">
               <Link to={`/windbnb/${list.title.split(' ').join('-').toLowerCase()}`}><img src={list.photo} alt={list.type} /></Link>
              </div>
              <div className="card-body">
                <div className="card-info">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {list.superHost && (
                      <div className="card-pill">Super Host</div>
                    )}
                    <span className="card-tag">
                      {list.type} {list.beds && " . " + list.beds + " beds"}
                    </span>
                  </div>
                  {list.rating && <div className="rating"><span style={{color: '#EB5757', fontSize: '24px'}}><MdStar /></span> <span>{list.rating}</span></div>}
                </div>
                <h3><Link to={`/windbnb/${list.title.split(' ').join('-').toLowerCase()}`}>{list.title}</Link></h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
