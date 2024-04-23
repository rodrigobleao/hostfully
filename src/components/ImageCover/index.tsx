import Image from 'next/image';
import React from 'react';

type ImageCoverProps = {
  alt: string;
  src: string;
  minHeight: number;
};

const ImageCover: React.FC<ImageCoverProps> = ({ alt, src, minHeight }) => {
  return (
    <>
      <div
        className="rounded-md overflow-hidden relative"
        style={{
          minHeight: minHeight,
        }}
      >
        <div className="absolute inset-0">
          <Image
            src={`/images/accommodations/${src}.jpg`}
            alt={alt}
            fill
            style={{ objectFit: 'cover' }}
            draggable={false}
            sizes="50vw"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default ImageCover;
