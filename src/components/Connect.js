import React from 'react';
import "./Connect.css";
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

function Connect() {
  return <ImageSlider slides={SliderData} />;
}

export default Connect;