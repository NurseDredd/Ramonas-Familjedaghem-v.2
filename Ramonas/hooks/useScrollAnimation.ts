"use client";

import {useRef, useEffect} from 'react';
import {useInView, useAnimation} from 'framer-motion';

export function useScrollAnimation() {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: '0px 0px -5% 0px'});   

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [controls, isInView]);
    
    return {ref, 
        animate: controls,
        initial: "hidden",
        variants: {
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0},
        },
        transition: {duration: 0.8, ease: 'easeOut'},
    };
}