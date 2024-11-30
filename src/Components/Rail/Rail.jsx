import React, { useEffect, useState, useRef } from "react";
import { readFB } from "../../Firebase/api";
import Card from "../Card/Card";

function Rail({ page }) {
  const [blockData, setBlockData] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const loading = useRef(false);

  const fetchData = async () => {
    if (loading.current || page !== "/para-ti") return;
    loading.current = true;

    const { data, lastDoc } = await readFB("publics", lastVisible, 10);
    setBlockData((prev) => [...prev, ...data]);
    setLastVisible(lastDoc);

    loading.current = false;
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      {blockData.map((data, i) => (
        <li key={i}>
          <Card data={data} index={i} cardMode={"post"} />
        </li>
      ))}
    </div>
  );
}

export default Rail;
