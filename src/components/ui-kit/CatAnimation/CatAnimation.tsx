import Lottie from "lottie-react";
import type { LottieRefCurrentProps } from "lottie-react";
import animationData from "../../../assets/animationImage/catAnimation.json";

export const CatAnimation = ({ refProp }: { refProp: React.RefObject<LottieRefCurrentProps> }) => {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={{
        width: '100%', 
        height: '300px', 
        position: "absolute", 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%,-50%)',
        zIndex: '0'
      }}
      lottieRef={refProp}
    />
  );
};