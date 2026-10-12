import { CvHoverShell } from "@/components/ui/cv-hover-shell";

type DecisionCardProps = {
  text: string;
};

export function DecisionCard({ text }: DecisionCardProps) {
  return (
    <CvHoverShell intensity="subtle" className="mt-5 max-w-xl cursor-default p-4">
      <p className="text-[17px] leading-relaxed text-text-primary">{text}</p>
    </CvHoverShell>
  );
}
