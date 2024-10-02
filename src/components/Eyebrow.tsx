interface EyebrowProps {
  text: string;
}

export function Eyebrow({ text }: EyebrowProps) {
  return <div className="mb-4 uppercase text-inherit opacity-70">{text}</div>;
}
