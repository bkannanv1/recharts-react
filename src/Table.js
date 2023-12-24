import "./Table.css";

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
        <th>Date</th>
        <TableHead n={15} />
      </tr>
      <tr>
        <td>Spend</td>
        <TableRows n={15} />
      </tr>
    </table>
  );
}
