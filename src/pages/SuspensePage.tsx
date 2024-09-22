import { Suspense } from "react";
import SuspenseComponent from "../components/SuspenseComponent";

export default function SuspensePagePage() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <SuspenseComponent />
    </Suspense>
  );
}
