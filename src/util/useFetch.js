import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return data;
};

export default useFetch;
