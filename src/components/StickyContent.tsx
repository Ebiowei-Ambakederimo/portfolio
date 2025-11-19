import React from 'react';
import Image from 'next/image';

interface StickyContentProps {
  imageSrc: string;
  imageAlt: string;
  title: React.ReactNode;
  text: string;
  textMeta?: boolean;
}

export default function StickyContent({
  imageSrc,
  imageAlt,
  title,
  text,
  textMeta = false,
}: StickyContentProps) {
  return (
    <>
      <div className="contentimg contentimg--large contentimg--left bg-white">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={400}
          className="object-cover w-full h-full"
          priority
        />
      </div>
      <h2 className="contenttitle text-black">{title}</h2>
      <p className={`contenttext contenttext--left text-black ${textMeta ? 'text-meta' : ''}`}>
        {text}
      </p>
    </>
  );
}