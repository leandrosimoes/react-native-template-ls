import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Title, Button } from '~/screens/About/styles'

const AboutScreen = props => {
    return (
        <Wrapper>
            <Title>About Screen</Title>
            <Button
                onPress={() => {
                    props.navigation.toggleDrawer()
                }}
                title='Menu'
            />
        </Wrapper>
    )
}

AboutScreen.propTypes = {
    navigation: PropTypes.oneOfType([PropTypes.any]).isRequired,
}

export default AboutScreen
