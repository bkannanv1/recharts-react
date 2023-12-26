import "./Table.css";

// function TableHead({ n }) {
//   let head = [];
//   for (let i = 1; i < n + 1; i++) {
//     head.push(<div className="table_cell">7/{i}</div>);
//   }
//   return head;
// }

// function TableRows({ n }) {
//   let row = [];
//   for (let i = 1; i < n + 1; i++) {
//     row.push(<div className="table_cell">100</div>);
//   }
//   return row;
// }

// export function Table() {
//   return (
//     <div className="table_container">
//       <div className="table_row">
//         <div className="table_cell label">Date</div>
//         <TableHead n={15} />
//       </div>
//       <div className="table_row">
//         <div className="table_cell label">Spend</div>
//         <TableRows n={15} />
//       </div>
//     </div>
//   );
// }

function TableHead({ n }) {
  let head = [];
  for (let i = 1; i < n + 1; i++) {
    head.push(<th>7/{i}</th>);
  }
  return head;
}

function TableRows({ n }) {
  let row = [];
  for (let i = 1; i < n + 1; i++) {
    row.push(<td>100</td>);
  }
  return row;
}

export function Table() {
  return (
    <table>
      <tr>
        <th className="title">Date</th>
        <TableHead n={15} />
      </tr>
      <tr>
        <td>Spend</td>
        <TableRows n={15} />
      </tr>
    </table>
  );
}
