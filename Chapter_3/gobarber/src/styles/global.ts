import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
        --background: #312E38;

				--white: #FFFFFF;
        --white-400: #F4EDE8;

        --black-400: #3E3B47;
        --black-500: #28262E;
        --black-600: #232129;

		    --gray-400: #999591;
				--gray-500: #666360;

        --orange-400: #FF9000;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        text-decoration: none;

    }

		@media(max-width: 1080px) {
			html{
		    font-size: 93.75%;
		  }
		}

		@media(max-width: 720px) {
			html{
        font-size: 87,5%;
	    }
		}

    body {
	    background-color: var(--background);
			color: var(--white);
      -webkit-font-smoothing: antialiased; //melhora a visualização da fonte - funciona só pro chrome
    }

		body, input, button, select, textarea {
      font-family: 'Roboto Slab', serif;
      font-weight: 400;
	    font-size: 1rem;
		}

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 500;
    }

		button {
	    cursor: pointer;
		}

		a {
	    color: inherit;
	    //fazendo com que a cor padrão do a seja a mesma do seu elemento pai!
	    text-decoration: none;
		}
`;
