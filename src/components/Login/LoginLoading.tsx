import { Loading, Spinner, SpinnerText } from './Styles';

export default function LoginLoading() {
  return (
    <Loading>
      <Spinner />
      <SpinnerText>Carregando...</SpinnerText>
    </Loading>
  );
}
