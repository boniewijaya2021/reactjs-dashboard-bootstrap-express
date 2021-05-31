export const token = localStorage.usertoken

    if(!token){
        this.props.history.push(`/`)
    }