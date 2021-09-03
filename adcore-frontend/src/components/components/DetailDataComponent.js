import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const url = "https://localhost:9090/adcore/api/data";

const DetailDataComponent = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const getData = async () => {
    const { fetchedData } = await axios.get(url + id);
    setData(fetchedData);
    return data;
  };

  useEffect(() => {
    getData();
  }, []);

  //   fetch(url + id)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setSpacecraft(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  return (
    <div class="container">
      <h1 class="font-weight-light mt-4">
        <strong>Data: </strong>
        {Data.name}
      </h1>
      <hr />

      <div class="row align-items-center">
        {/* <div class="col-lg-7">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src={`/images/${spacecraft.spacecraft_image}`}
            alt={spacecraft.spacecraft_name}
          />
        </div> */}

        <div class="col-lg-5">
          <p>
            <strong>Description: </strong>
            {data.description}
          </p>
          <p>
            <strong>Parent: </strong>
            {data.parent}
          </p>
        </div>
      </div>

      <div class="row align-items-center" id="data">
        <div class="col-lg-12">
          <p>
            <strong>Read Only: </strong>
            {data.read_only}
          </p>
          <p>
            <strong>Created: </strong>
            {data.created}
          </p>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default DetailDataComponent;
