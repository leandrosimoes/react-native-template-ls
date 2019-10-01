import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Title, Button } from '~/screens/Home/styles'

const HomeScreen = props => {
    return (
        <Wrapper>
            <Title>Home Screen</Title>
            <Button
                onPress={() => {
                    props.navigation.toggleDrawer()
                }}
                title='Menu'
            />
        </Wrapper>
    )
}

HomeScreen.propTypes = {
    navigation: PropTypes.oneOfType([PropTypes.any]).isRequired,
}

export default HomeScreen
