interface EyebrowProps {
  text: string;
}

export function Eyebrow({ text }: EyebrowProps) {
  return (
    <div className="uppercase text-white/[0.5]" id="div-2">
      {text}
    </div>
  );
}
