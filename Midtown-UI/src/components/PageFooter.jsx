import React from 'react'
import logo from "../HelpingHands3.png";

function PageFooter(props) {
  return (
    <div>
      <footer style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#f0f0f0',
        padding: '8px',
        fontSize: '10px', // Adjusted font size
        zIndex: 999,
        height: '95px',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <div>
            <img
              src={props.imagesrc}
              alt="Helping Hands Care Centers Logo"
              style={{
                height: '15px',
                maxWidth: '15px', // Adjusted maximum width
                marginRight: '0px', // Reduced margin
              }}
            />
            <p style={{ margin: 0 }}> {/* Remove default margin */}
              <span style={{ fontWeight: 'bold' }}>Helping Hands Care Center</span>
              <br />
              Company Statement
            </p>
          </div>
          <div>
            <nav>
              <h6 style={{ fontSize: '12px', margin: '5px 0' }}>Legal</h6> {/* Adjusted font size */}
              <a className="link link-hover block" style={{ fontSize: '8px', margin: '2px 0' }}>Terms of use</a> {/* Adjusted font size and margin */}
              <a className="link link-hover block" style={{ fontSize: '8px', margin: '2px 0' }}>Privacy policy</a>
              <a className="link link-hover block" style={{ fontSize: '8px', margin: '2px 0' }}>Cookie policy</a>
            </nav>
            <p style={{ fontSize: '6px', margin: '5px 0' }}> {/* Adjusted font size */}
              Copyright © 2024 - All right reserved by ACME Industries Ltd
            </p>
          </div>
          <div>
            <p style={{ fontSize: '12px', margin: '50' }}>Call Support Help Line at (012)345-6789</p> {/* Adjusted font size */}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PageFooter