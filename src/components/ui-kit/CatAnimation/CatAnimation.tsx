import { useEffect, forwardRef } from "react";
import lottie from "lottie-web";
import type { AnimationItem } from "lottie-web";
import animationData from "../../../assets/animationImage/catAnimation.json";

export const CatAnimation = forwardRef<HTMLDivElement>((_, ref) => {
  const internalRef = (ref as React.MutableRefObject<HTMLDivElement>) || { current: null };

  useEffect(() => {
    if (!internalRef.current) return;

    const animation: AnimationItem = lottie.loadAnimation({
      container: internalRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <div
      ref={internalRef}
      style={{
        width: '100%',
        height: '300px',
        position: "absolute",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: '0'
      }}
    />
  );
});

CatAnimation.displayName = "CatAnimation";