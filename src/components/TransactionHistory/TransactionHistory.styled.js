import styled from 'styled-components';

export const Table = styled.table`
  width: 725px;
  margin: 20px auto;

  border-spacing: 0;
  empty-cells: hide;
  margin-bottom: 20px;
`;
export const TableCaption = styled.caption`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;
export const TableHead = styled.thead`
  background: #f6d27e;
`;
export const TableBody = styled.tbody``;
export const TableDataCell = styled.td`
  padding: 10px;
  padding-left: 10px;
  text-align: center;
  border-bottom: 1px solid #f4eee8;
  transition: all 0.5s linear;

  :first-child {
    text-align: left;
    color: #3d3511;
    font-weight: bold;
    text-align: center;
  }
  :last-child {
    text-align: left;
  }
  :nth-child(even) {
    background: #f6d27e;
  }
  :nth-child(odd) {
    background: #d1c7bf;
  }
  :nth-child(even) {
    background: #f6d27e;
  }
  :nth-child(odd) {
    background: #d1c7bf;
  }
`;
export const TableRow = styled.tr`
  :hover td {
    background: #d1c7bf;
    font-weight: bold;
  }
`;
export const TableHeaderCells = styled.th`
  padding: 10px 20px;
  color: #3d3511;
  border-bottom: 1px solid #f4eee8;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
