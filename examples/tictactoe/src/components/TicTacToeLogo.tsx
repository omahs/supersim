import React from 'react';

interface TicTacToeLogoProps {
    width?: string;
    height?: string;
}


const TicTacToeLogo: React.FC<TicTacToeLogoProps> = ({ width = '18', height = '18' }) => {
  return (
    <div>
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.777766" y="0.777888" width="54.4448" height="54.4442" rx="5.44437" stroke="#404454" stroke-width="1.55553"/>
        <path d="M37.6541 24.2451C40.9132 24.2451 43.5543 21.6039 43.5543 18.3447C43.5543 15.0856 40.9132 12.4443 37.6541 12.4443C34.3951 12.4443 31.7539 15.0856 31.7539 18.3447C31.7539 21.6039 34.3951 24.2451 37.6541 24.2451ZM37.6541 15.6627C39.1335 15.6627 40.336 16.8653 40.336 18.3447C40.336 19.8241 39.1335 21.0267 37.6541 21.0267C36.1748 21.0267 34.9722 19.8241 34.9722 18.3447C34.9722 16.8653 36.1748 15.6627 37.6541 15.6627Z" fill="#404454"/>
        <path d="M18.3436 31.7548C15.0845 31.7548 12.4434 34.396 12.4434 37.6551C12.4434 40.9143 15.0845 43.5555 18.3436 43.5555C21.6026 43.5555 24.2438 40.9143 24.2438 37.6551C24.2438 34.396 21.6026 31.7548 18.3436 31.7548ZM18.3436 40.3371C16.8642 40.3371 15.6617 39.1345 15.6617 37.6551C15.6617 36.1758 16.8642 34.9732 18.3436 34.9732C19.8229 34.9732 21.0255 36.1758 21.0255 37.6551C21.0255 39.1345 19.8229 40.3371 18.3436 40.3371Z" fill="#404454"/>
        <path d="M29.6076 12.4443H26.3893V26.3907H12.4434V29.6091H26.3893V43.5555H29.6076V29.6091H43.5535V26.3907H29.6076V12.4443Z" fill="#404454"/>
        <path d="M15.3105 23.654L18.3443 20.6201L21.378 23.654L23.6534 21.3785L20.6196 18.3447L23.6534 15.3108L21.378 13.0354L18.3443 16.0693L15.3105 13.0354L13.0352 15.3108L16.0689 18.3447L13.0352 21.3785L15.3105 23.654Z" fill="#404454"/>
        <path d="M40.6886 32.3459L37.6548 35.3798L34.621 32.3459L32.3457 34.6214L35.3795 37.6552L32.3457 40.6891L34.621 42.9645L37.6548 39.9306L40.6886 42.9645L42.9639 40.6891L39.9301 37.6552L42.9639 34.6214L40.6886 32.3459Z" fill="#404454"/>
      </svg>
    </div>
  )
}

export default TicTacToeLogo;