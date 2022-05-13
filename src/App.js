import logo from "./logo.svg";
import "./App.css";
import CSVReader from "react-csv-reader";
import { useState } from "react";
import Table from "./component/Table";
import axios from "axios";

function App() {
  const [csvFile, setCsvFile] = useState([]);
  const onFileLoaded = async (data, fileInfo, originalFile) => {
    const obj = data.map((val) => {
      let [name, phone, email] = val;
      let csvData = { name, phone, email };
      return csvData;
    });
    await axios.post("http://localhost:4000/posts", obj).then((response) => {
      console.log(response.data, "lllllllllllllllllll");
    });
    setCsvFile(obj);
    console.log(obj, "obj");
  };

  return (
    <>
      <CSVReader onFileLoaded={onFileLoaded} />
      <table>
        <tbody>
          <tr>
            {csvFile &&
              csvFile.map((val, i) => (
                <tr key={i}>
                  <td>{val.name}</td>
                  <td>{val.phone}</td>
                  <td>{val.email}</td>
                </tr>
              ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
