"use client";

import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

type DonateButtonProps = {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "destructive";
};

const DonateButton = ({
  className,
  size = "default",
  variant = "default",
}: DonateButtonProps) => {
  return (
    <Button
      size={size}
      variant={variant}
      className={`bg-linear-to-r from-[rgba(220,38,38,1)] to-[rgba(239,68,68,1)] font-semibold text-white shadow-md transition-all duration-200 hover:from-[rgba(220,38,38,0.9)] hover:to-[rgba(239,68,68,0.9)] hover:shadow-lg ${className}`}
      onClick={() => {
        // Placeholder - will be implemented later
        console.log("Donate button clicked");
      }}
    >
      <Heart className="h-4 w-4 fill-current" />
      <span>Donate</span>
    </Button>
  );
};

export default DonateButton;
