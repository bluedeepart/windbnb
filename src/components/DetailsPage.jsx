import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import staysDataList from "../data/stays";
import { ReactComponent as Logo } from "../../src/logo.svg";
import { MdKeyboardBackspace, MdStar } from "react-icons/md";

const DetailsPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setDetails(
        staysDataList.filter(
          (list) =>
            list.title.split(" ").join("-").toLowerCase() === params.title
        )
      );
      setLoading(false);
    }, 500);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className="container loading">
        <Logo />
      </div>
    );
  } else {
    return (
      <section>
        {/* {console.log(details)} */}

        {details.map((list, index) => (
          <div key={index} className="details-page">
            <div className="flex-between">
              <div className="container">
                <div className="flex">
                  <button
                    onClick={() => {
                      navigate(-1);
                    }}
                    className="back-icon"
                  >
                    <MdKeyboardBackspace title="Back to Home" />
                  </button>
                  <h1>{list.title}</h1>
                </div>
              </div>
            </div>
            <div className="details-image">
              <img src={list.photo} alt={list.type} />
              {list.superHost && <div className="super-host">Super Host</div>}
            <div className="grayBg">
              <div className="container">
                <h3 className="card-tag flex-between">
                    <div>
                      {list.type}
                      {list.beds ? " . " + list.beds + " beds" : " . 0 Bed"} .{" "}
                      {list.maxGuests} Guest(s){" "}
                    </div>
                    <div className="rating">
                      <span style={{ color: "#EB5757", fontSize: "24px" }}>
                        <MdStar />
                      </span>
                      {list.rating}
                    </div>
                  </h3>
              </div>
            </div>
            </div>
            <div className="container">
              <div className="city">City: {list.city}</div>
              <div className="country mb-32">Country: {list.country}</div>
              <h3 className="mb-20">Details</h3>
              <p className="mb-20">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt impedit fugiat culpa pariatur quasi quae commodi,
                cumque dolorum nobis unde sint sapiente ea temporibus fugit odio
                id, suscipit delectus omnis ratione quis explicabo officia.
                Molestiae atque alias neque fuga quas voluptas dolores, incidunt
                praesentium libero blanditiis ut maxime! Quisquam eos maiores
                blanditiis sequi earum, ducimus a ab quo cupiditate, odio
                pariatur accusantium explicabo sunt? Explicabo, quas eum alias
                in commodi consequuntur magni quia pariatur eaque tempore at
                saepe vel maiores, rerum rem distinctio fuga! Aut culpa
                veritatis cumque tenetur accusamus perferendis alias quisquam
                quam iste odit sequi, dolor eligendi vitae!
              </p>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                  consectetur sapiente animi eveniet. Animi, ea inventore.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                  consectetur sapiente animi eveniet. Animi, ea inventore.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                  consectetur sapiente animi eveniet. Animi, ea inventore.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                  consectetur sapiente animi eveniet. Animi, ea inventore.
                </li>
              </ul>
            </div>
          </div>
        ))}
      </section>
    );
  }
};

export default DetailsPage;
