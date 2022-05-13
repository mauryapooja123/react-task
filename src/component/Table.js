import TableRow from "./tableRow";

const Table = (props) => {
  // var heading = props.heading;
  var body = props.body;
  return (
    <table style={{ width: 500 }}>
      <tbody>
        {body.map((row) => (
          <TableRow row={row} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
