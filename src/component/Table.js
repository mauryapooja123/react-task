import React from "react";

function Table(props) {
  console.log(props.user, "pppppppppppp");
  return (
    <div>
      <table>
        <tr>
          <th>name</th>
          <th>phone</th>
          <th>email</th>
        </tr>
        {props.user.map((item) => (
          <>
            {item.map((val) => (
              <tr>
                <td>{val.name}</td>
                <td>{val.phone}</td>
                <td>{val.email}</td>
              </tr>
            ))}
          </>
        ))}
      </table>
    </div>
  );
}

export default Table;
