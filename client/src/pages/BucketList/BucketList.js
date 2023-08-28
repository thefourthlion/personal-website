import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./BucketList.css";
const BucketList = () => {
  const [itemChecked, setItemChecked] = useState(false);
  const [newBucketListItem, setNewBucketListItem] = useState("");
  const [items, setItems] = useState([]);

  const getItems = () => {
    Axios.get("https://api.everettdeleon.com/api/bucketlist/read").then(
      (res) => {
        const data = res.data;
        setItems(data);
      }
    );
  };

  const sendForm = () => {
    Axios.post("https://api.everettdeleon.com/api/bucketlist/create", {
      item: newBucketListItem,
      done: "false",
    }).then(() => {
      refreshPage();
    });
  };

  const itemDone = (id, state) => {
    Axios.post(`https://api.everettdeleon.com/api/bucketlist/update/${id}`, {
      done: state,
    }).then(() => {
      refreshPage();
    });
  };

  useEffect(() => {
    getItems();
  }, []);

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="BucketList">
      <h1>Bucket List</h1>
      <div className="add-item">
        <input
          type="text"
          onChange={(e) => {
            setNewBucketListItem(e.target.value);
          }}
        />
        <button
          onClick={() => {
            sendForm();
          }}
        >
          Submit
        </button>
      </div>

      {items.map((val, key) => {
        return (
          <div className="bucket-items">
            {val.done == "true" ? (
              <input
                className="check"
                type="checkbox"
                onClick={() => {
                  itemDone(val._id, "false");
                }}
                checked
              />
            ) : (
              <input
                className="check"
                type="checkbox"
                onClick={() => {
                  itemDone(val._id, "true");
                }}
              />
            )}

            <p
              className={
                val.done == "false" ? "bucket-item" : "bucket-item item-done"
              }
            >
              {val.item}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default BucketList;
