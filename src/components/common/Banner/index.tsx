import  React from 'react';
import { BaseBanner, Inner, NoteContainer, Background, NoteContent, FBLink } from './Banner.styles';

const Banner = () => (
  <BaseBanner>
    <Inner>
      <NoteContainer>
        <Background />
        <NoteContent>
          <p>
            Estimad@s:
          </p>
          <p>
            informamos que, en virtud de la inexistencia de eventos hasta nuevo aviso debido a los hechos de dominio público, a partir del <b>6 de mayo</b> este sitio web será reducido a un hosting mínimo, por lo cual, si desean adquirir alguna foto de las competencias, sugerimos contactarnos en nuestro perfil de Facebook: <FBLink to="https://www.facebook.com/AccionDigitalfoto/">AccionDigitalfoto</FBLink>
          </p>
          <p>
            Muchas gracias y esperamos reencontrarnos a la brevedad a disfrutar de nuestras pasiones.
          </p>
          <p>
            Un abrazo virtual!
          </p>  
        </NoteContent>
      </NoteContainer>
    </Inner>
  </BaseBanner>
);

export default Banner;