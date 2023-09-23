import { Loading, Spinner, SpinnerText } from './styles';

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
