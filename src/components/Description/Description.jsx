'use client';

import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
// import Rounded from '../../common/RoundedButton';
export default function Description() {

    const phrase = "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
  {phrase.split(" ").map((word, index) => {
    return (
      <span key={`mask-${index}`} className={styles.mask}>
        <span 
          variants={slideUp} 
          custom={index} 
          animate={isInView ? "open" : "closed"}
        >
          {word}
        </span>
      </span>
    )
  })}
</p>
            </div>
        </div>
    )
}
