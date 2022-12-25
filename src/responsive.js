import { css } from "styled-components";

export const mobil = (props) => {
  return css`
    @media only sreen and (max-width: 380px) {
      ${props}
    }
  `;
};

// export const tablet = (props) => {
//     return css`
//       @media only sreen and (max-width: 680px) {
//         ${props}
//       }
//     `;
//   };
