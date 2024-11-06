import React from 'react';

export default function LoadingSpinner() {
    return (
        <>
            <style>
                {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
            </style>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '15vh',
                textAlign: 'center',
                backgroundColor: '#f4f4f4',
            }}>
                <div style={{
                    width: '40px',
                    height: '40px',
                    border: '4px solid #ddd',
                    borderTop: '4px solid #0070f3',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                }}></div>
                <p style={{
                    marginTop: '16px',
                    fontSize: '18px',
                    color: '#555',
                    fontFamily: 'Arial, sans-serif',
                }}>Loading...</p>
            </div>
        </>
    );
}
