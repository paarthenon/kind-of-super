import React from 'react'

export const Well = ({children}: {children?: React.ReactNode}) => {
    return (
        <div style={{
            backgroundColor: '#F0F0F0',
            border: '1px solid gray',
            borderRadius: '5px',
            padding: '1rem',
            marginBottom:' 1rem',
        }}>
            {children}
        </div>
    )
}
