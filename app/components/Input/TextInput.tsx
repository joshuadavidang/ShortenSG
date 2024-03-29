import { Input } from "@/components/ui/input";
import { KeydownEvent } from "@/helpers/type";

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
      onKeyDown={onKeyDown}
    />
  );
}

export { TextInput };
