import logo from "./logo.svg";
import "./App.css";
import CSVReader from "react-csv-reader";
import { useEffect, useState } from "react";
import Table from "./component/Table";
import axios from "axios";

function App() {
  useEffect(() => {
    getData();
  }, []);

  const [csvFile, setCsvFile] = useState([]);
  const [user, setUser] = useState([]);
  const onFileLoaded = async (data, fileInfo, originalFile) => {
    const obj = data.map((val) => {
      let [name, phone, email] = val;

      let csvData = { name, phone, email };
      console.log(csvData.phone);
      // arr.push();
      return csvData;
    });
    console.log(obj, "oooooooooooo");
    const res = await axios.post("http://localhost:4000/posts", obj);
    if (res && res.data) {
      setCsvFile(obj);
    }
    //console.log(, "obj");
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios.get("http://localhost:4000/posts").then((response) => {
      setUser(response.data);
    });
  };

  console.log(user, "pppppppppp");

  return (
    <>
      <CSVReader onFileLoaded={onFileLoaded} />
      <Table user={user} />
    </>
  );
}

export default App;
