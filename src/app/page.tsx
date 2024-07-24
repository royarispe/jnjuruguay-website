import React from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import "./globals.css";

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Bienvenidos a la Jornada Nacional Juvenil</h1>
      <AspectRatio ratio={16 / 9} className="aspect-ratio">
        <Image
          src="/images/LogoColores.jpg"
          alt="Logo de la Jornada"
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </AspectRatio>
    </div>
  );
};

export default HomePage;
