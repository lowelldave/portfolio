"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

interface ImageWithFallbackProps extends Omit<ImageProps, "onError"> {
  fallbackSrc: string;
  onError?: () => void;
}

const ImageWithFallback = ({ src, alt, fallbackSrc, onError, ...rest }: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      onError={() => {
        onError?.();
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

export default ImageWithFallback;
