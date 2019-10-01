import styled from 'styled-components/native'

import Theme from '~/theme'

const Wrapper = styled.View`
    flex: 1;
    background-color: ${Theme.SecondaryColor};
    align-items: center;
    justify-content: center;
`

const Title = styled.Text`
    color: ${Theme.MainColor};
`

const Button = styled.Button`
    background-color: ${Theme.MainColor};
`

export default Wrapper
export { Wrapper, Title, Button }
