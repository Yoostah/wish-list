import React from 'react';

import {HiCode} from 'react-icons/hi'
import {FiTarget, FiAward} from 'react-icons/fi'

import { Container } from './styles';

function Header() {
  return (
    <Container>
        <nav>
            <div>
                <HiCode size={26} />
                <strong>WishList</strong>
            </div>
            <h1>Olá Usuário</h1>
            <ul>
                <li><FiTarget/> Desejos em Aberto <span>02</span></li>
                <li><FiAward/> Desejos Realizados <span>10</span></li>
            </ul>
        </nav>
            
    </Container>
  );
}

export default Header;