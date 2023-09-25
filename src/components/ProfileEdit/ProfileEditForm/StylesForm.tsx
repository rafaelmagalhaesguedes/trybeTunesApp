import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormEditProfile = styled.form`
  padding-top: 1.25rem;
  width: 65%;

  @media only screen and ( max-width : 768px ) {
    margin-top: -50px;
    padding-left: 1.875rem;
    width: 100%;
  }
`;

export const InputEditName = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Epilogue , sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  height: 5.438rem;
  line-height: 1.125rem;
  margin-bottom: 1.25rem;
  width: 21.625rem;
`;

export const Label = styled.label`
  font-size: 1rem;
`;

export const Paragraph = styled.p`
  color: rgb(61, 73, 92);
  font-family: Epilogue , sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid #0033;
  color: rgb(159, 161, 164);
  height: 37px;
  padding: 10px;
  width: 18rem;

  &:focus {
    outline: 1px solid silver;
  }
`;

export const EditEmail = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Epilogue , sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  width: 21.625rem;
`;

export const EditEmailInputIcons = styled.div`
 
 .icon-invalid {
    color: red;
    height: 20px;
    width: 20px;
  }
  
  .icon-valid {
    color: green;
    height: 20px;
    width: 20px;
  }
`;

export const EditInputEmail = styled.input`
  border: none;
  border-bottom: 2px solid #0033;
  color: rgb(159, 161, 164);
  height: 37px;
  margin-bottom: 26px;
  margin-right: 10px;
  padding: 10px;
  width: 18rem;
`;

export const EditInputDescription = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Epilogue , sans-serif;
  font-size: 12px;
  font-weight: 400;
  height: auto;
  line-height: 18px;
  margin-bottom: 26px;
  width: 21.625rem;
`;

export const Textarea = styled.textarea`
  border: none;
  border-bottom: 2px solid #0033;
  color: rgb(159, 161, 164);
  font-family: Epilogue , sans-serif;
  font-size: 14px;
  font-weight: 400;
  height: 80px;
  line-height: 21px;
  margin-top: 5px;
  padding: 10px;
  width: 30.625rem;

  &:focus {
   outline: 1px solid silver;
  }

  @media only screen and ( max-width : 768px ) {
    width: 18rem;
  }
`;

export const InputEditImage = styled.div`
  margin-bottom: 5px;
`;

export const InputEditImageUrl = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Epilogue , sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  width: 21.625rem;
`;

export const InputImage = styled.input`
  border: none;
  border-bottom: 2px solid #0033;
  color: rgb(159, 161, 164);
  height: 37px;
  margin-bottom: 26px;
  margin-right: 10px;
  padding: 10px;
  width: 18rem;
`;

export const IconValid = styled(FontAwesomeIcon)`
  color: green;
  height: 20px;
  padding-top: 5px;
  width: 20px;
`;

export const IconInvalid = styled(FontAwesomeIcon)`
  color: red;
  height: 20px;
  padding-top: 5px;
  width: 20px;
`;

export const ButtomSaveForm = styled.div`
    align-items: center;
    border: none;
    display: flex;
    width: 30.625rem;
    
  @media only screen and ( max-width : 768px ) {    
    width: 80%;
  }
`;

export const ButtomForm = styled.button`
  background: rgb(0, 59, 229);
  border: none;
  border-radius: 6.25rem;
  color: white;
  cursor: pointer;
  font-family: Epilogue , sans-serif;
  font-size: 14px;
  font-weight: 700;
  height: 2.5rem;
  letter-spacing: 0.03em;
  line-height: 14px;
  text-transform: uppercase;
  width: 9.5rem;
`;

export const LinkCancel = styled(Link)`
  text-decoration: none;
  background: rgb(0, 59, 229);
  color: white;
  padding: 10px 20px;
  margin: 0 1.5rem;
  cursor: pointer;
  font-family: Epilogue , sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.03em;
  line-height: 14px;
  text-transform: uppercase;
`;
