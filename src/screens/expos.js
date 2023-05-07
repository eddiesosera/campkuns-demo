import React from "react";

function Expos() {
    return (
        <div style={{ maxWidth: '470px', width: '100vw', margin: 'auto auto', }}>
            <div className="wrap" style={{
                height: '500px',
                position: 'absolute', top: '0', bottom: '0', left: '0', right: '0', justifyContent: 'space-evenly',
                display: 'flex', alignItems: 'center', flexDirection: 'column',
                background: '#151515', width: '93vw', maxWidth: '470px', margin: 'auto auto', borderRadius: '15px'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className="heading" style={{
                        color: '#FFE7D9', fontFamily: 'Poppins', fontSize: '20px', fontWeight: '600',
                        marginBottom: '20px'
                    }}>
                        <i className="ri-box-2-fill"></i>: Suggest Concept
                    </div>
                    <div style={{
                        color: '#4d4845', fontFamily: 'neue-haas-grotesk-text', textAlign: 'center', fontSize: '12px', width: '72vw',
                        maxWidth: '470px'
                    }}>
                        Suggest a concept that can help artists engage with commercial markets and fans.
                    </div>
                </div>

                <textarea placeholder="I suggest that..." className="suggestionInput" style={{
                    background: 'none', outline: 'none', height: '200px', borderRadius: '9px', width: '72vw', maxWidth: '440px', color: '#FFE7D9',
                    fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', padding: '12px', border: '1px solid #33302E',
                    backgroundColor: 'none', resize: 'none'
                }}></textarea>
                <button style={{
                    width: '72vw', maxWidth: '440px', background: '#F3761C', borderRadius: '12px', border: 'none', height: '45px',
                    fontFamily: 'Poppins', fontWeight: '600', fontSize: '14px', color: '#FFE7D9'
                }}>
                    Suggest
                </button>
            </div>
        </div>
    )
}

export default Expos