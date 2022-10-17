import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web/build/player/lottie_light';
import { Box } from '@chakra-ui/react';

const Animation = ({ animation, base, md }) => {
  const animationInstance = useRef(null);

  useEffect(() => {
    const animationData = JSON.stringify(animation);
    const anim = lottie.loadAnimation({
      container: animationInstance.current,
      animationData: JSON.parse(animationData),
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });
    return () => {
      anim.stop();
      anim.destroy();
      lottie.stop();
      lottie.destroy();
    };
    // eslint-disable-next-line
  }, []);
  return <Box ref={animationInstance} objectFit='cover' w={{ base: base, md: md }} h='100%'></Box>;
};

Animation.defaultProps = {
  base: '100%',
  md: '100%',
};

export default Animation;
