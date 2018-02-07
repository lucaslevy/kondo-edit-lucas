import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'

const styles = {
    errorStyle: {
        fontSize: '14px',
        padding: '8px 0 0 0'
    }
}

/**
 * Component textfield to be used whole system
 */
export default props => (
    <MuiThemeProvider>
        <TextField
            { ...props.input}
            hintText={props.placeholder}
            errorText={props.errorText}
            errorStyle={styles.errorStyle}
            className={props.className}
            type={props.type}
        />
    </MuiThemeProvider>
)
