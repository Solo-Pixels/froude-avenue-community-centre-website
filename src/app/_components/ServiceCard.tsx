"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Service = {
  id: number;
  title: string;
  description: string;
  imageUrl: string | null;
};

const ServiceCard = ({ service }: { service: Service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ");
  };

  const shortDescription = truncateText(service.description, 16);
  const needsTruncation = service.description.split(" ").length > 16;

  return (
    <Card className="overflow-hidden rounded-3xl bg-[#fff7ef]/20 transition-shadow hover:shadow-xl">
      <div className="p-6">
        <h3 className="text-foreground mb-3 text-2xl font-bold">
          {service.title}
        </h3>
        <p className="text-muted-foreground mb-3">
          {isExpanded ? (
            service.description
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

export default ServiceCard;
