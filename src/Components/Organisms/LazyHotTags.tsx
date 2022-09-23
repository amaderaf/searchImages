import React, { Suspense } from "react";
import { useNearIntersection } from "../../Hooks";

const HotTags = React.lazy(() => import('./HotTags'))

export const LazyHotTags = () => {
  const { isNear, ref } = useNearIntersection();

  return (
    <Suspense fallback={null}>
      <div ref={ref} id="lazyLoading"></div>
      {isNear ? <HotTags /> : null}
    </Suspense>
  );
};
