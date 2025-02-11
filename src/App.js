import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Memberships from "./Memberships";
import Loading from "./Loading";

function App() {
  const [memberships, setMemberships] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteMembership = (id) => {
    const afterDeletedMembership = memberships.filter(
      (membership) => membership.id !== id,
    );
    setMemberships(afterDeletedMembership);
  };

  const fetchMemberships = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/upgrade");
      setMemberships(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }

    debugger;
  };

  useEffect(() => {
    fetchMemberships();
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          {memberships.length === 0 ? (
            <div className="refleshDiv">
              <h2>Üyelik Aldın</h2>
              <button
                className="cardDeleteButton"
                onClick={() => {
                  fetchMemberships();
                }}
              >
                Yenile
              </button>
            </div>
          ) : (
            <Memberships
              memberships={memberships}
              removeMembership={deleteMembership}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
