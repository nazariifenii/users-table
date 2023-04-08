import styled, { keyframes } from "styled-components";

const toastInRight = keyframes`
  from {
    transform: translateX(100%);
    
  }
  to {
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  font-size: 14px;
  box-sizing: border-box;
  position: fixed;
  z-index: 999999;
  top: 12px;
  right: 12px;
  transition: transform 0.6s ease-in-out;
  animation: ${toastInRight} 0.7s;
`;

export const Notification = styled.div`
  font-family: "Poppins", sans-serif;
  background: #fff;
  transition: 0.3s ease;
  position: relative;
  pointer-events: auto;
  overflow: hidden;
  margin: 0 0 6px;
  margin-bottom: 15px;
  width: 300px;
  max-height: 100px;
  border-radius: 3px 3px 3px 3px;
  box-shadow: 0 0 10px #999;
  color: #000;
  background-position: 15px;
  background-repeat: no-repeat;
  height: 50px;
  width: 365px;
  color: #fff;
  padding: 15px 10px 10px 10px;
`;

export const CloseButton = styled.div`
  position: relative;
  right: -0.13em;
  top: -0.3em;
  float: right;
  font-weight: 700;
  color: #fff;
  outline: none;
  border: none;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.8;
  line-height: 1;
  font-size: 16px;
  padding: 0;
  cursor: pointer;
  background: 0 0;
  border: 0;
`;

export const ImageContainer = styled.div`
  float: left;
  margin-right: 15px;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 16px;
  text-align: left;
  margin-top: 0;
  margin-bottom: 6px;
  width: 300px;
  height: 18px;
`;

export const Message = styled.p`
  margin: 0;
  text-align: left;
  height: 18px;
  margin-left: -1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
`;
