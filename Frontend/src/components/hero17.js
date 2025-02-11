import React, { useRef, Fragment } from 'react';

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero17.css'
import { Link } from 'react-router-dom'

const Hero17 = (props) => {
  return (
    <div className="hero17-header78">
      <div className="hero17-column thq-section-padding thq-section-max-width">
        <div className="hero17-content1">
          <h1 className="hero17-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero17-text7">
                  Medium length hero headline goes here
                </span>
              </Fragment>
            )}
          </h1>
          <p className="hero17-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero17-text8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions">
        <Link to="/menu" className="thq-button-filled hero17-button1">
          <span className="thq-body-small">
            {props.action1 ?? (
              <Fragment>
                <span className="home-text115">Menu</span>
              </Fragment>
            )}
          </span>
        </Link>

        <Link to="/carrinho" className="thq-button-filled hero17-button2">
          <span className="thq-body-small">
            {props.action4 ?? (
              <Fragment>
                <span className="home-text115">Carrinho</span>
              </Fragment>
            )}
          </span>
        </Link>


        <Link to="/fidelidade" className="thq-button-outline hero17-button2">
          <span className="thq-body-small">
            {props.action2 ?? (
              <Fragment>
                <span className="home-text115">Fidelidade</span>
              </Fragment>
            )}
          </span>
        </Link>


        
        <Link to="/home" className="thq-button-outline hero17-button2">
          <span className="thq-body-small">
            {props.action3 ?? (
              <Fragment>
                <span className="hero17-text5">Sobre</span>
              </Fragment>
            )}
          </span>
        </Link>

        </div>
      </div>
      <div className="hero17-content2">
        <div className="hero17-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            
          </div>
          <div className="thq-animated-group-horizontal">
           
          </div>
        </div>
        <div className="hero17-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  action2: undefined,
  action1: undefined,
  heading1: undefined,
  content1: undefined,}

Hero17.propTypes = {
  image3Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image12Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image9Src: PropTypes.string,
  image11Alt: PropTypes.string,
  action2: PropTypes.element,
  action1: PropTypes.element,
  image8Src: PropTypes.string,
  image5Src: PropTypes.string,
  image4Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  image10Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Hero17
