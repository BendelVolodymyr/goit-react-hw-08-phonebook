import { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    setTimeout(function () {
      window.location = '/goit-react-hw-08-phonebook';
    }, 5000);
  });
  return (
    <>
      <h2>Сторінка не знайдена</h2>
    </>
  );
};

export default NotFound;
