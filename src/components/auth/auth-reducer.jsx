const userKey = '4609f78c-1ad1-4f77-9343-0b1ce9892338'
const INITIAL_STATE = {
    afterSingup: false,
    user: JSON.parse(localStorage.getItem(userKey)),
    validToken: false,
    loading: false,
    formErrors: {
        company_name: false,
        name: false,
        email: false,
        password: false,
        password_confirmation: false,
    }
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOKEN_VALIDATED':
            if (action.payload) {
                return { ...state, validToken: true }
            } else {
                localStorage.removeItem(userKey)
                return { ...state, validToken: false, user: null }
            }

        case 'USER_FETCHED':
            console.log('reducer - user fetched')
            localStorage.setItem(userKey, JSON.stringify(action.payload))
            return { ...state, user: action.payload, validToken: true }

        case 'CONTROL_LOADING':
            console.log('---- ACTION -----')
            console.log(action.payload)
            return { ...state, loading: action.payload}

        case 'SUBMIT_ERRORS':
            return { 
                ...state, 
                formErrors: {
                    company_name: action.payload.company_name,
                    name: action.payload.name,
                    email: action.payload.email,
                    password: action.payload.password,
                    password_confirmation: action.payload.password_confirmation
                } 
            }

        case 'USER_LOGOUT':
            localStorage.removeItem(userKey)
            return { ...state, validToken: false, user: null }    
            
        case 'SHOW_SINGUP_CONFIRMATION_MESSAGE':
            return { ...state, afterSingup: action.payload}

        default:
            return state
    }
}