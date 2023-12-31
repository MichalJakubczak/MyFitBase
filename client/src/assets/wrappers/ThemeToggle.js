import styled from 'styled-components';

const Wrapper = styled.button`
  background: transparent;
  border-color: transparent;
  width:1;
  height: 1.5;
  display: grid;
  place-items: center;
  cursor: pointer;
  .toggle-icon {
    font-size: 1.15rem;
    color: var(--text-color);
  }
`;
export default Wrapper;
