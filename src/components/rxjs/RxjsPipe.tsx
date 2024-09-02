import React, { useEffect, useState } from "react";
import { interval } from "rxjs";
import { take, tap } from "rxjs/operators";

// pipe를 통해 값으로 여러가지 처리를 해볼 수 있다.
const obsv$ = interval(1000).pipe(
  tap((value) => console.log(`${30 * value}`)),
  take(10)
);

export default function RxjsPipe() {
  const [state, setState] = React.useState(0);

  React.useEffect(() => {
    // 구독을 걸고...
    const sub = obsv$.subscribe({
      next: (v) => setState((v) => v + 1),
      //완료시 complete
      complete: () => console.log("done!"),
    });

    return () => sub.unsubscribe();
  }, []);

  return (
    <>
      <h3>Alarm Clock</h3>
      <div className="display">{state}</div>
    </>
  );
}
