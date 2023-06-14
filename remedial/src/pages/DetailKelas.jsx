import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DetailKelas = () => {
  const { id } = useParams();
  const [kelas, setKelas] = useState([]);

  useEffect(() => {
    axios({
      url: `https://remedial-production.up.railway.app/kelas/${id}`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        console.log(result.data.kelas);
        setKelas(result.data.kelas);
      })
      .catch((error) => console.log(error));
  }, [id]);
  
  return (
    <>
      <div>
        <h1>detail kelas: {kelas.nama_kelas}</h1>
        <h1>params id: {id}</h1>
        <pre>{JSON.stringify(kelas, null, 2)}</pre>
      </div>
    </>
  );
};

export default DetailKelas;
