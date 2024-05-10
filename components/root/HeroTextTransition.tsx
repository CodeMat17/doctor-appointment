"use client";

import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";



const HeroTextTransition = ({ TEXTS }: { TEXTS: string[] }) => {
  const [index, setIndex] = React.useState(0);


  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);



  return (
    <span className='text-pink-600'>
      <TextTransition springConfig={presets.wobbly}>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
      {/* {`${TEXTS}`.split("").map((txt, i) => (
        <TextTransition
          key={i}
          delay={i * 100}
          className='big'
          inline>{txt}</TextTransition>
      ))} */}
    </span>
  );
};

export default HeroTextTransition;
