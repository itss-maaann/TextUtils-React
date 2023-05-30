import React from 'react'

export default function Alert(props) {
    const firstLetterCapitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };
    return (
            props.alert && 
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{firstLetterCapitalize(props.alert.type)}!</strong> {firstLetterCapitalize(props.alert.message)}
            </div>
    )
}