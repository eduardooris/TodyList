interface IfProps {
  condition: boolean;
  children: React.ReactNode;
}

export default function If({ condition, children }: IfProps) {
  return condition ? children : null;
}
