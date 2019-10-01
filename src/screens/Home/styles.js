import styled from 'styled-components/native'

import Theme from '~/theme'

const Wrapper = styled.View`
    flex: 1;
    background-color: ${Theme.MainColor};
    align-items: center;
    justify-content: center;
`

const Title = styled.Text`
    color: ${Theme.SecondaryColor};
`

const Button = styled.Button`
    background-color: ${Theme.SecondaryColor};
`

export default Wrapper
export { Wrapper, Title, Button }
