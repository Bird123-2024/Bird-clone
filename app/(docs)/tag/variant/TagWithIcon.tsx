"use client";
import { useState } from "react";
import { Tag } from "@/src/components/Tag";
import { CrownSimple, X } from "phosphor-react";

const TagWithIcon = () => {
  const [dismiss, setDismiss] = useState(false);

  const onDismiss = () => {
    setDismiss(!dismiss);
  };
  return (
    <div className="flex w-full flex-row gap-2">
      <Tag
        disabled={true}
        dismiss={dismiss}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} color="#5E718D" />}
        dismissIcon={<X size={20} color="#5E718D" />}
      >
        <span className="text-sm font-medium text-slate-500">Tag</span>
      </Tag>
      <Tag
        color="error"
        dismiss={false}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} color="#FF3838" />}
        dismissIcon={<X size={20} color="#FF3838" />}
      >
        <span className="text-sm font-medium text-error-500">Tag</span>
      </Tag>
      <Tag
        color="info"
        dismiss={false}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} color="#1B4DFF" />}
        dismissIcon={<X size={20} color="#1B4DFF" />}
      >
        <span className="text-sm font-medium text-primary-500">Tag</span>
      </Tag>
      <Tag
        color="success"
        dismiss={false}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} color="#11A75C" />}
        dismissIcon={<X size={20} color="#11A75C" />}
      >
        <span className="text-sm font-medium text-success-500">Tag</span>
      </Tag>
      <Tag
        color="warning"
        dismiss={false}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} color="#FFC700" />}
        dismissIcon={<X size={20} color="#FFC700" />}
      >
        <span className="text-sm font-medium text-warning-500">Tag</span>
      </Tag>
      <Tag
        color="teal"
        dismiss={false}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} color="#27CAB5" />}
        dismissIcon={<X size={20} color="#27CAB5" />}
      >
        <span className="text-sm font-medium text-teal-500">Tag</span>
      </Tag>
      <Tag
        color="purple"
        dismiss={false}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} color="#820BF4" />}
        dismissIcon={<X size={20} color="#820BF4" />}
      >
        <span className="text-sm font-medium text-purple-500">Tag</span>
      </Tag>
    </div>
  );
};

const TagWithIconCode = `
import { useState } from "react";
import { Tag } from "keep-design";
import { CrownSimple, X } from "phosphor-react";

const TagWithIcon = () => {
  const [dismiss, setDismiss] = useState(false);

  const onDismiss = () => {
    setDismiss(!dismiss);
  };
  return (
    <div className="flex w-full flex-row gap-2">
      <Tag
        disabled={true}
        dismiss={dismiss}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} color="#5E718D" />}
        dismissIcon={<X size={20} color="#5E718D" />}
      >
        <span className="text-sm font-medium text-slate-500">Tag</span>
      </Tag>
      <Tag
        color="error"
        dismiss={false}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} color="#FF3838" />}
        dismissIcon={<X size={20} color="#FF3838" />}
      >
        <span className="text-sm font-medium text-error-500">Tag</span>
      </Tag>
      <Tag
        color="info"
        dismiss={false}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} color="#1B4DFF" />}
        dismissIcon={<X size={20} color="#1B4DFF" />}
      >
        <span className="text-sm font-medium text-primary-500">Tag</span>
      </Tag>
      <Tag
        color="success"
        dismiss={false}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} color="#11A75C" />}
        dismissIcon={<X size={20} color="#11A75C" />}
      >
        <span className="text-sm font-medium text-success-500">Tag</span>
      </Tag>
      <Tag
        color="warning"
        dismiss={false}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} color="#FFC700" />}
        dismissIcon={<X size={20} color="#FFC700" />}
      >
        <span className="text-sm font-medium text-warning-500">Tag</span>
      </Tag>
      <Tag
        color="teal"
        dismiss={false}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} color="#27CAB5" />}
        dismissIcon={<X size={20} color="#27CAB5" />}
      >
        <span className="text-sm font-medium text-teal-500">Tag</span>
      </Tag>
      <Tag
        color="purple"
        dismiss={false}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} color="#820BF4" />}
        dismissIcon={<X size={20} color="#820BF4" />}
      >
        <span className="text-sm font-medium text-purple-500">Tag</span>
      </Tag>
    </div>
  );
};

export default TagWithIcon;

`;

export { TagWithIcon, TagWithIconCode };
