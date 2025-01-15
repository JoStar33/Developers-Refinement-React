type CaseType = {
  when?: boolean;
  isDefault?: boolean;
};

interface CaseProps extends CaseType {
  children: React.ReactNode;
}

interface SwitchProps {
  children: React.ReactElement<CaseType>[];
}

// 재밌는 컴포넌트를 발견 및 연구완료!
// 스위치 케이스를 컴포넌트의 형태로 직관적으로 노출 가능한 기술.
// 다소 보기힘들었던 조건문 연산자를 통한 컴포넌트 노출을 아래와 같은 형태로 개선할 수 있겠다.
export function Case({ children }: CaseProps): React.ReactNode {
  return children;
}

export function Switch({ children }: SwitchProps): React.ReactNode {
  const defaultComponent = children.find((child) => child?.props?.isDefault);
  const resultComponent = children.find((child) => child?.props?.when);
  return resultComponent || defaultComponent;
}
