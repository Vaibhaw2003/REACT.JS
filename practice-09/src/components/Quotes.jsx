import { useEffect, useState } from 'react';

const Quotes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/quotes')
      .then(response => response.json())
      .then(result => {
        setData(result.quotes);
      })
      .catch(error => {
        console.error('Error fetching quotes:', error);
      });
  }, []);

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: 'lightgreen',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}
    >
      <h2>Quotes</h2>

      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '10px',
          backgroundColor: 'white',
          borderRadius: '5px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          color: 'black',

        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Quote</th>
            <th>Author</th>
          </tr>
        </thead>

        <tbody style={{ textAlign: 'center',borderTop: '1px solid #ccc', }}>
          {data.map((quote) => (
            <tr key={quote.id}>
              <td>{quote.id}</td>
              <td>{quote.quote}</td>
              <td>{quote.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Quotes;