import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './backtotop.css';

function ButtonBackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Verifica a posição da janela para mostrar ou ocultar o botão
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Adiciona um ouvinte de evento de rolagem quando o componente é montado
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Remove o ouvinte de evento de rolagem quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Função para rolar para o topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Rolagem suave
    });
  };

  return (
    <div>
      {isVisible && (
        <button className="back-to-top" onClick={ scrollToTop }>
          <FontAwesomeIcon icon={ faArrowUp } />
        </button>
      )}
    </div>
  );
}

export default ButtonBackToTop;
