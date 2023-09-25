import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
@import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;700;900&family=Roboto:wght@400;500;900&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Epilogue , sans-serif;
  }
  
  .container {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    height: auto;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
