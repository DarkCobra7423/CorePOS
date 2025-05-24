import styled from 'styled-components';

const TitleGlobal = ({ children }) => {

    return (
        <>
            <Text>
                {children}
            </Text>
        </>
    );
}

const Text = styled.div`
  color: #333;
  text-shadow: 1px 4px 6px #c6c6c6, 0 0 0 #000, 1px 4px 6px #c6c6c6;
  display: block;
  font-size: 2em;           /* Generalmente 32px si el body tiene 16px */
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  font-weight: bold;
`;

export default TitleGlobal;
