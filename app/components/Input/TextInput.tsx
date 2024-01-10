import { Input } from "@/components/ui/input";
import { KeydownEvent } from "@/helper/type";

type TextInputProps = {
  type: string;
  placeholder: string;
  value: string | number;
  width?: number;
  onChange: any;
  name: string;
  onKeyDown: KeydownEvent;
};

function TextInput({
  type,
  placeholder,
  onChange,
  name,
  onKeyDown,
}: TextInputProps) {
  return (
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className="mb-3"
      onKeyDown={onKeyDown}
    />
  );
}

export { TextInput };
