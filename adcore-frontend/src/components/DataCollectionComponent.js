import React, { useState } from "react";
import useFetch from "../customHooks/useFetch";

const url = "http://localhost:9090/adcore/api/data";

const DataCollectionComponent = () => {
  const { dataCollection } = useFetch(url);

  return (
    <div class="container">
      <h1 class="mt-4">Data Collection From Adcore</h1>
      <hr />
      {dataCollection &&
        dataCollection.map((data) => (
          <div class="row align-items-center" key={data.data_id} id="data">
            {/* <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={`/images/${spacecraft.spacecraft_image}`}
              alt={spacecraft.spacecraft_name}
            />
          </div> */}

            <div class="col-lg-5">
              <h2 class="font-weight-light">{data.name}</h2>
              <p>
                <strong>Description: </strong>
                {data.description}
              </p>
              <a class="btn btn-primary" href={`/data/${data.data_id}`}>
                Detailed Information
              </a>
            </div>
          </div>
        ))}

      <hr />
    </div>
  );
};

export default DataCollectionComponent;
