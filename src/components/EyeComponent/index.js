import React from 'react'
import styled from 'styled-components'
import { IconEye, IconEyeSlash } from '../../assets/icons'
import Image from '../Image/Image'

const EyeComponent = ({
  data: { isPassowordVisible },
  actions: { togglePasswordVisibility }
}) => {
  return (
    <EyeButton onPress={togglePasswordVisibility}>
      <EyeIconComponent
        source={isPassowordVisible ? IconEyeSlash : IconEye}
        height='18'
        width='22'
      />
    </EyeButton>
  )
}

const EyeIconComponent = styled(Image)``

const EyeButton = styled.TouchableOpacity`
  padding: 8px;
  position: absolute;
  right: 2;
  top: 3;
`

export default EyeComponent
