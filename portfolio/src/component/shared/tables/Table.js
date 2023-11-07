/*import React from 'react';

const Table = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
      <thead style={{ backgroundColor: '#f2f2f2' }}>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key} style={{ padding: '10px', border: '1px solid #ddd' }}>
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, nestedIndex) => (
              <td key={nestedIndex} style={{ padding: '10px', border: '1px solid #ddd' }}>
                {value && typeof value === 'object' ? Object.values(value).join(', ') : value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default Table;
*/

// Table.js
// Table.js
import React from 'react';

const Table = ({ data, loading, onUpdateClick, onDeleteClick }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
      <thead style={{ backgroundColor: '#f2f2f2' }}>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key} style={{ padding: '10px', border: '1px solid #ddd' }}>
              {key}
            </th>
          ))}
          <th style={{ padding: '10px', border: '1px solid #ddd' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, nestedIndex) => (
              <td key={nestedIndex} style={{ padding: '10px', border: '1px solid #ddd' }}>
                {value && typeof value === 'object' ? Object.values(value).join(', ') : value}
              </td>
            ))}
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>
              {/* Update button */}
              <button onClick={() => onUpdateClick(item.cid)}>Update</button>
              {/* Delete button */}
              <button onClick={() => onDeleteClick(item.cid)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
