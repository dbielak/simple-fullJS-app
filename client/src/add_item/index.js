import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const AddItem = () => {
  const history = useHistory();
  return (
    <StyledAddItemPage>
      <h1>Add Item Page</h1>
      <div>
        <button onClick={() => history.goBack()}> BACK</button>
      </div>
    </StyledAddItemPage>
  );
};

export default AddItem;

const StyledAddItemPage = styled.section`
  width: 900px;
  max-width: 100%;
  margin: 0 auto;
`;
