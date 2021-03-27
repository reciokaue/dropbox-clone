import React from 'react';

import { Container, Navigation, Form, DropboxLogo } from './styles';

const MenuForm: React.FC = () => {
  function handleToggle(){
    if(window.toggleActiveMenu) window.toggleActiveMenu()
  }

  return (
      <Container>
          <Navigation>
              <h1>
                <DropboxLogo/>
                <span>Dropbox</span>
              </h1>
              <button
              className="actionClose"
              onClick={handleToggle}
              >
                ✕
              </button>
          </Navigation>

          <Form>
            <span className="title">Registre-se</span>
            <span className="subtitle">Preecha o formulario</span>
            
            <input type="text" placeholder="Nome"/>
            <input type="text" placeholder="Sobrenome"/>
            <input type="text" placeholder="E-mail"/>
            <input type="password" placeholder="Senhna"/>

            <button>Prosseguir</button>

            <span className="terms">
                Esta página esta sujeita à Politica de privacidade e aos Termos de serviço  
            </span>

          </Form>
      </Container>
  );
}

export default MenuForm;