import { useFormStatus } from "react-dom";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button variant="default" type="submit" size="lg" className="w-full">
      {pending ? (
        <DotsHorizontalIcon className="w-9 h-9 animate-pulse" />
      ) : (
        "Shorten URL"
      )}
    </Button>
  );
}
