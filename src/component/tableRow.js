const TableRow = (props) => {
  var row = props.user;
  return (
    <tr>
      {row.map((val) => (
        <>
          <td>{val.name}</td>
          <td>{val.phone}</td>
          <td>{val.email}</td>
        </>
      ))}
    </tr>
  );
};

export default TableRow;
