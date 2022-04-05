import styled from 'styled-components/native'

const Wrapper = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    align-items: center;
    justify-content: center;
`

const Title = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
`

export { Wrapper, Title }

