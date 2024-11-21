import React, { useState } from 'react';
import styled from 'styled-components';

interface DownloadButtonProps {
  label: string;
  onClick?: () => void;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ label, onClick }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <StyledWrapper>
      <div 
        className="download-button" 
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div className="icon">
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16l4-4h-3V4h-2v8H8l4 4zM5 18v2h14v-2H5z" fill="#fff" />
          </svg>
        </div>
        <div className="label">{label}</div>
        <div className="loading">
          <span />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .download-button {
    position: relative;
    width: 200px;
    height: 60px;
    border: 2px solid #282828;
    border-radius: 5px;
    background-color: #212121;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.5),
      inset 0 1px 3px rgba(255, 255, 255, 0.3);
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    transition:
      background-color 0.3s,
      color 0.3s,
      transform 0.2s;
  }

  .download-button::before {
    content: "";
    position: absolute;
    top: -100%;
    left: 0;
    right: 0;
    bottom: 100%;
    border-radius: 5px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
    z-index: 1;
    transition:
      top 0.5s ease-in-out,
      bottom 0.5s ease-in-out;
  }

  .download-button:hover::before {
    top: 0;
    bottom: 0;
  }

  .download-button:hover {
    background-color: #465243;
    color: #fff;
    transform: translateY(-5px);
  }

  .download-button .icon {
    position: absolute;
    left: 20px;
  }

  .download-button .icon svg {
    width: 24px;
    height: 24px;
  }

  .download-button .label {
    position: relative;
    z-index: 10;
  }

  .download-button .loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-image: linear-gradient(
      -225deg,
      #ff7402 0%,
      #ffe700 50%,
      #fff55e 100%
    );
    filter: blur(20px);
    z-index: -1;
    animation: animate 0.8s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 640px) {
    .download-button {
      width: 160px;
      height: 50px;
      font-size: 14px;
    }

    .download-button .icon {
      left: 15px;
    }

    .download-button .icon svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export default DownloadButton;

