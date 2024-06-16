"use client"

import React from "react";
import Image from 'next/image';

interface AvatarProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const Avatar: React.FC<AvatarProps> = (props) => {
    return <Image src={props.src} alt={props.alt} width={props.width} height={props.height} className="rounded-full"/>;
}

export default Avatar;