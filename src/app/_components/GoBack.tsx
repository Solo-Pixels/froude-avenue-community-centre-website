import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type GoBackProps = {
  href?: string;
  label?: string;
  className?: string;
};

const GoBack = ({
  href = "/",
  label = "Go Back",
  className = "",
}: GoBackProps) => {
  return (
    <Button
      variant="ghost"
      asChild
      className={`hover:bg-secondary bg-background/90 border-border fixed top-20 left-4 z-50 flex items-center gap-2 rounded-lg border px-4 py-2 shadow-lg backdrop-blur-sm ${className}`}
    >
      <Link href={href}>
        <ArrowLeft className="h-4 w-4" />
        <span className="font-medium">{label}</span>
      </Link>
    </Button>
  );
};

export default GoBack;
