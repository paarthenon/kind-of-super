import React from 'react'

export const Well = ({children}: {children?: React.ReactNode}) => {
    return (
        <div style={{
            backgroundColor: '#F0F0F0',
            border: '1px solid gray',
            borderRadius: '8px',
            padding: '1rem'
        }}>
            {children}
        </div>
    )
}
