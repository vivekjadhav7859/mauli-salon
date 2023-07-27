import styled from "styled-components";
export const Main = styled.div`
  width: 1290px;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  /* background-color: #1b1919; */
`;
export const Image = styled.img`
  margin-top: 20px;
  width: 580px;
  max-width: 100%;
  height: auto;
  padding: 0 10px;
  box-shadow: rgba(255, 255, 255, 0.15) 5.95px 5.95px 10.6px;

  @media screen and (max-width: 650px) {
    margin-top: 40px;
    margin-bottom: 35px;
  }
`;

export const AllText = styled.div`
  width: 600px;
  max-width: 100%;
  padding: 0 10px;
  /* color: white; */

  h4 {
    font-size: 32px;
    font-weight: bold;
    color: #d10068;
    letter-spacing: 1px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  h1 {
    font-size: 55px;
    color: silver;
    text-shadow: #75003a;
    font-weight: 700;
    margin-bottom: 20px;
    @media screen and (max-width: 650px) {
      font-size: 45px;
      margin-bottom: 20px;
    }
  }
  p {
    font-size: 18px;
    color: silver;
    text-align: justify;
  }

  @media screen and (max-width: 1250px) {
    text-align: center;
    margin-top: 40px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 650px) {
    display: flex;
    gap: 10px;

    /* align-items: center; */
  }
`;
export const Button = styled.button`
  background: linear-gradient(#ff007f, #ff2e96);
  /* align-items: center; */
  padding: 20px 32px;
  font-size: 16px;
  font-weight: bold;
  color: black;
  border: none;
  outline: none;
  margin-right: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  &:hover {
    background: linear-gradient(#ff033e, #ff2e96, #75003a);
    color: #fff;
    transition: 0.3s;
    cursor: pointer;
  }
  @media screen and (max-width: 650px) {
    padding: 10px 20px;
    margin-left: 5px;
  }
`;

export const AboutContainer = styled.div`
  padding-top: 40px;
  @media screen and (max-width: 650px) {
  }
`;
export const AboutUs = styled.div`
  height: 100vh;
  width: 100%;
  background: #171717;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1250px) {
    width: 100%;
    height: auto;
    padding: 60px 0;
  }
`;
