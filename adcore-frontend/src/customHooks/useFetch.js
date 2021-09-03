import React, { useState, useEffect, useCallback } from "react";

const useFetch = (url) => {
  const [dataCollection, setDataCollection] = useState([]);

  const getData = useCallback(async () => {
    const response = await fetch(url);
    const dataCollection = await response.json();

    console.log(dataCollection);
    setDataCollection(dataCollection);
  }, [url]);

  useEffect(() => {
    getData();
  }, [url]);

  return { dataCollection };
};

export default useFetch;
