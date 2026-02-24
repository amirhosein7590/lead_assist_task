import { useMemo } from "react";

export default function useInformationInput(properties) {
  const inputs = useMemo(() => {
    if (!properties) return [];
    return properties.map((prop) => ({
      type: "text",
      name: prop.key,
      rules: {
        required: `Please Insert ${prop.key}`,
      },
      placeholder: prop.key,
    }));
  }, [properties]);
  return { inputs };
}
