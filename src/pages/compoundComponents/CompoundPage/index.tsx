import Select from '../../../components/compoundComponents';
import { Container } from './CompoundPage.style';

const CompoundPage = () => {
  const SELECT_OPTION = {
    PAY: {
      LABEL: '금액별',
      VALUE: 'pay',
    },
    PARTICIPATION: {
      LABEL: '참여별',
      VALUE: 'participation',
    },
  }
  return (
    <Container>
      <Select>
        <Select.Option>{SELECT_OPTION.PAY.LABEL}</Select.Option>
        <Select.Option>{SELECT_OPTION.PARTICIPATION.LABEL}</Select.Option>
      </Select>
    </Container>
  );
};

export default CompoundPage;