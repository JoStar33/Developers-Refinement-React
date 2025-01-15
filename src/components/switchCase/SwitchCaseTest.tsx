import React from 'react';
import { Case, Switch } from './SwitchCase';

type CurrentState = 'A' | 'B' | 'C';

export default function SwitchCaseTest() {
  const [currentState, setCurrentState] = React.useState<CurrentState>('A');

  return (
    <Switch>
      <Case when={currentState === 'A'}>
        <div>This is A</div>
      </Case>
      <Case when={currentState === 'B'}>
        <div>This is B</div>
      </Case>
      <Case when={currentState === 'C'}>
        <div>This is C</div>
      </Case>
      <Case isDefault>
        <div>This is Default</div>
      </Case>
    </Switch>
  );
}
