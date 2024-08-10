import { Skeleton } from "@/components/ui/skeleton";

export function ButtonSkeleton() {
  return (
    <div className="flex items-center space-x-4">
      <div className="space-y-2">
        <Skeleton className="h-8 w-24" title="Loading" />
      </div>
    </div>
  );
}
