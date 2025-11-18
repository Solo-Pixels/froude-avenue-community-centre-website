import { Button } from "@/components/ui/button";

type ContactButtonProps = {
  email?: string;
  label?: string;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
};

const ContactButton = ({
  email = "froudeavecc@gmail.com",
  label = "Contact Our Team",
  className = "bg-accent text-accent-foreground hover:bg-accent/90",
  size = "lg",
}: ContactButtonProps) => {
  return (
    <Button size={size} className={className} asChild>
      <a href={`mailto:${email}`}>{label}</a>
    </Button>
  );
};

export default ContactButton;
