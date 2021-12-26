import React, {useEffect, useState} from 'react';
import * as EarthFrames from './EarthFrames';

const frameInterval = 30;

const Earth = () => {
  const [frameIdx, setFrameIdx] = useState(0);
  const frames = Object.values(EarthFrames);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFrameIdx((frameIdx + 1) % frames.length)
    }, frameInterval)

    return () => {
      clearTimeout(timeout);
    }
  }, [frameIdx])

  return frames[frameIdx]();
}

export default Earth;
