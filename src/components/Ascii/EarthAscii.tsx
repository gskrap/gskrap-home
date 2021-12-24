import React, {useEffect, useState} from 'react';
import * as EarthFrames from './EarthAsciiFrames';

const Earth = () => {
  const [frameIdx, setFrameIdx] = useState(0);
  const frames = Object.values(EarthFrames);

  useEffect(() => {
    setTimeout(() => {
      setFrameIdx((frameIdx + 1) % frames.length)
    }, 30)
  }, [frameIdx])

  return frames[frameIdx]();
}

export default Earth;
