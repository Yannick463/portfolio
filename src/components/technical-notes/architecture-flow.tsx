import { ChevronRight } from "lucide-react";
import { CvHoverShell } from "@/components/ui/cv-hover-shell";

type ArchitectureFlowProps = {
  nodes: string[];
  caption?: string;
};

export function ArchitectureFlow({ nodes, caption }: ArchitectureFlowProps) {
  return (
    <div className="mt-5">
      <ol className="group/flow m-0 flex list-none flex-col items-start gap-2 p-0 lg:flex-row lg:flex-wrap lg:items-center">
        {nodes.map((node, index) => (
          <li key={`${node}-${index}`} className="flex flex-col items-start gap-2 lg:flex-row lg:items-center">
            {index > 0 && (
              <ChevronRight
                size={14}
                aria-hidden="true"
                className="text-text-secondary/55 transition-all duration-300 max-lg:rotate-90 motion-safe:group-hover/flow:translate-x-0.5 motion-safe:group-hover/flow:text-text-secondary"
              />
            )}
            <CvHoverShell intensity="subtle" className="w-fit max-w-full cursor-default px-4 py-3">
              <span className="text-sm text-text-primary">{node}</span>
            </CvHoverShell>
          </li>
        ))}
      </ol>
      {caption && (
        <p className="technical-note-body mt-4 max-w-[760px] text-text-secondary">{caption}</p>
      )}
    </div>
  );
}
