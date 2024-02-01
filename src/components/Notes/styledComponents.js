// Style your elements here
import styled from 'styled-components'

export const Div1 = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Div2 = styled.div`
  display: flex;
  height: 100%;
  width: 60%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 40px;
`

export const H1 = styled.h1`
  font-family: Bree Serif;
  color: #4c63b6;
`

export const Form = styled.form`
  width: 70%;
  height: 30%;
  box-shadow: 2px 2px 2px 2px #aab8c8;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px;
`

export const Input = styled.input`
  border-style-type: none;
  border-color: transparent;
`
export const TextArea = styled.textarea`
  border-style-type: none;
  border-color: transparent;
`

export const Btn = styled.button`
  display: flex;
  align-self: flex-end;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
  background-color: #4c63b6;
  color: #ffffff;
  border-radius: 5px;
  border-style-type: none;
  border-color: transparent;
`

export const Img = styled.img`
  height: 150px;
`

export const Div3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
`
