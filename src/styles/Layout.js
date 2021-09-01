import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 4rem 1.5rem;
  @media screen and (max-width: 642px) {
    padding: 3rem 1.5rem;
  }
  /* @media screen and (max-width: 510px){
        padding: 3rem;
    } */
  @media screen and (max-width: 571px) {
    padding: 1.8rem 0.4rem;
  }
`;
export const InnerLayout = styled.div`
  padding: 5rem 0;
`;
