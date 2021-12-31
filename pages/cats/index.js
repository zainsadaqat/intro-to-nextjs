import React from 'react';
import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import DefaultLayout from '../../layouts/Default';

const index = () => {
  const [cats, setCats] = useState([]);
  const fetchCats = async () => {
    const response = await fetch('/api/cats');
    const data = await response.json();
    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <>
      <DefaultLayout>
        <div className="container mt-5">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 30,
            }}
          >
            {cats.map((cat) => (
              <Card
                name={cat.name}
                email={cat.email}
                phone={cat.phone}
                id={cat.id}
                image={cat.image}
              />
            ))}
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default index;
