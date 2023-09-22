/*
*  Component Loading
*/
import './loading.css';

export default function Loading() {
  return (
    <div className="box-spinner">
      <p className="spinner" />
      <p className="text-spinner">Carregando...</p>
    </div>
  );
}
