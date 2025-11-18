"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import programImage0 from "@/assets/images/programs/program01.png";
import programImage1 from "@/assets/images/programs/program02.png";
import programImage2 from "@/assets/images/programs/program03.png";
import programImage3 from "@/assets/images/programs/program04.png";
import programImage5 from "@/assets/images/programs/program05.png";
import programImage6 from "@/assets/images/programs/program06.png";
import programImage7 from "@/assets/images/programs/program04.png";
import programImage8 from "@/assets/images/programs/program04.png";

type Program = {
  id: number;
  title: string;
  description: string;
  imageUrl: string | null;
  order?: number | null;
};

const ProgramCard = ({ program }: { program: Program }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ");
  };

  const shortDescription = truncateText(program.description, 16);
  const needsTruncation = program.description.split(" ").length > 16;

  const programImages = [
    programImage0,
    programImage1,
    programImage2,
    programImage3,
    programImage5,
    programImage6,
    programImage7,
    programImage8,
  ];

  const getProgramImage = () => {
    if (programImages.length === 0) return programImage0;
    const normalizedOrder =
      typeof program.order === "number"
        ? Math.max(program.order - 1, 0)
        : undefined;
    const seed = normalizedOrder ?? program.id ?? 0;
    const index = Math.abs(seed) % programImages.length;
    return programImages[index] ?? programImage0;
  };

  const imageSrc = program.imageUrl ?? getProgramImage();

  return (
    <Card className="group relative aspect-square overflow-hidden rounded-3xl transition-shadow hover:shadow-2xl">
      <Image
        src={imageSrc}
        alt={program.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        priority={program.id <= 3}
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
      <div className="absolute inset-x-3 bottom-3 rounded-3xl bg-white/80 p-5 text-left shadow-lg backdrop-blur-xs">
        <h3 className="text-foreground mb-2 text-2xl font-bold">
          {program.title}
        </h3>
        <p className="text-muted-foreground mb-2 text-sm leading-relaxed md:text-base">
          {isExpanded ? (
            program.description
          ) : (
            <>
              {shortDescription} <span className="tracking-widest">...</span>
            </>
          )}
        </p>
        {needsTruncation && (
          <Button
            variant="link"
            className="text-primary hover:text-primary/80 h-auto cursor-pointer! p-0"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ProgramCard;
