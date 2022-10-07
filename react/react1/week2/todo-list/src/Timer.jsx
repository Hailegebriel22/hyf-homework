import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';


export default function Timer () {
    const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
    return (
        <h2>
            You have used {seconds} seconds on this website. 
        </h2>

    )
}
