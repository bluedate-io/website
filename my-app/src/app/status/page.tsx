import { Suspense } from "react";
import StatusContent from "./StatusContent";

export default function StatusPage() {
  return (
    <Suspense>
      <StatusContent />
    </Suspense>
  );
}
