import React from 'react';
import styled from 'styled-components';

const Image = ({ id, ...rest }) => {
    return (
        <StyledImage 
            accessibilityLabel={id}
            testID={id}
            {...rest} 
        />

    );
}
const StyledImage = styled.Image`
    height: ${({ height }) => { return `${height}px` || ' 100%' }};
    width: ${({ width }) => { return `${width}px` || ' 100%'}};
`;

export default Image;