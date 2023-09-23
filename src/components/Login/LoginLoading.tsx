import { Loading, Spinner, SpinnerText } from './Styles';

export default function LoginLoading() {
  return (
    <Loading>
      <Spinner />
      <SpinnerText>
        <p>Carregando...</p>
      </SpinnerText>
    </Loading>
  );
}
