import clsx from 'clsx';
import React, { useState, useEffect } from 'react';

function Footer() {
  const [dateTime, setDateTime] = useState(new Date());
  const className = clsx('bg-gradient-to-b from-indigo-50 to-indigo-300')

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className={className}>
      {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
    </footer>
  );
}

export default Footer;