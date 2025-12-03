import React, { type HTMLInputTypeAttribute } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface GroupFormProps {
  label: string;
  type: HTMLInputTypeAttribute;
  labelStyle: string;
  inputStyle: string;
  className: string;
  isHideLabel?: boolean;
}

const GroupForm: React.FC<GroupFormProps> = ({
  label,
  type,
  labelStyle,
  inputStyle,
  className,
  isHideLabel,
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {!isHideLabel && <Label className={`${labelStyle}`}>{label}</Label>}
      <Input type={type} className={`${inputStyle}`} />
    </div>
  );
};

export default GroupForm;
