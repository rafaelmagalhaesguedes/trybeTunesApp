/*
*  Component Loading
*/
import { Spinner } from './Styles';

export default function Loading() {
  return (
    <Spinner>
      <p className="spinner" />
      <p className="text-spinner">Carregando...</p>
    </Spinner>
  );
}
