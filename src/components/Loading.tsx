/*
*  Component Loading
*/
import '../css/loading.css';

export default function Loading() {
  return (
    <>
      <p className="spinner" />
      <p className="text-spinner">Carregando...</p>
    </>
  );
}
