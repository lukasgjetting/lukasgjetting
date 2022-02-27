import Image from 'next/image';
import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

const imageHeight = 200;
const imageWidth = 125;

const FadingLightbulb = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      const element = containerRef.current;

      if (element == null) {
        return;
      }

      const distance = Math.sqrt(
        ((element.offsetLeft + (imageWidth / 2) - e.pageX) ** 2) +
        ((element.offsetTop + (imageHeight / 2) - e.pageY) ** 2),
      );

      setOpacity(Math.max(Math.log10(distance / 100), 0.25));

      console.log({
        mX: e.pageX,
        mY: e.pageY,
        eX: element.offsetLeft,
        eY: element.offsetTop,
        d: Math.log10(distance / 100),
      }, distance);
    };

    window.addEventListener('mousemove', listener);

    return () => {
      window.removeEventListener('mousemove', listener);
    };
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <div>
        <Image
          src="/lightbulb-yellow.png"
          alt="Lightbulb"
          width={imageWidth}
          height={imageHeight}
        />
      </div>
      <div className="absolute top-0" style={{ opacity }}>
        <Image
          src="/lightbulb.png"
          alt="Lightbulb"
          width={imageWidth}
          height={imageHeight}
        />
      </div>
    </div>
  );
};

export default FadingLightbulb;
