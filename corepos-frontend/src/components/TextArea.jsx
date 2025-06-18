import React from "react";
import styled from "styled-components";

const TextArea = ({ title, size, rows }) => {
    return (
        <StyledWrapper style={{ width: size }}>
            <label>
                {title}<br />
                <textarea
                    //value={paymentData.notes}
                    //onChange={e => handlePaymentChange('notes', e.target.value)}
                    rows={rows}
                    style={{ width: '100%' }}
                />
            </label>
        </StyledWrapper>
    );
}
const StyledWrapper = styled.div`
  
  label{
    color: #007bff;
  }

  textarea {
    //border-color: #007bff;
    border: 2px solid #007bff;
    }
  `

export default TextArea;