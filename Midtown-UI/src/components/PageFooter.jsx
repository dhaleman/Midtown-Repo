import React from 'react';
import logo from "../HelpingHands3.png";

function PageFooter(props) {
  return (
    <div>
      <footer style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#cceeff', // lighter shade of blue
        padding: '5px 10px', // Adjusted padding
        fontSize: '9px', // Adjusted font size
        zIndex: 999,
        height: '45px', // Adjusted height
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
              src={logo}
              alt="Helping Hands Care Centers Logo"
              style={{
                height: '13px', // Adjusted height
                maxWidth: '13px', // Adjusted maximum width
                marginRight: '0px', // Reduced margin
                marginBottom: '2px', // Moved image up slightly
              }}
            />
            <p style={{ margin: 0, lineHeight: '1', marginTop: '2px' }}> {/* Adjusted margin */}
              <span style={{ fontWeight: 'bold', position: 'relative', top: '1px' }}>Helping Hands Care Center</span> | Company Statement {/* Reorganized wording */}
            </p>
          </div>
          <div>
            <nav style={{ marginTop: '10px' }}> {/* Moved Legal section down by one line */}
              <h6 style={{ fontSize: '10px', margin: '2px 0', lineHeight: '1', marginTop: '1px' }}>Legal</h6> {/* Adjusted font size and margin */}
              <a className="link link-hover block" style={{ fontSize: '8px', margin: '1px 0', lineHeight: '1', marginTop: '1px' }}>Terms | Privacy | Cookies</a> {/* Reorganized wording */}
            </nav>
            <p style={{ fontSize: '5px', margin: '2px 0', lineHeight: '1', marginTop: '1px' }}> {/* Adjusted font size and margin */}
              © 2024 ACME Industries Ltd | All rights reserved
            </p>
          </div>
          <div>
            <p style={{ fontSize: '9px', margin: '2px 0', lineHeight: '1', marginTop: '1px' }}>Call Support: (012)345-6789</p> {/* Adjusted font size and margin */}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PageFooter;
