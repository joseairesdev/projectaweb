import styled from 'styled-components';


export const Container = styled.div`
 display: flex;
main{
    width: 100%;
    padding: 20px;
   
 }
`


export const SidebarArea = styled.div`
background-color:#06113C;
color: black;
height: 100vh;
width: 300px;
`


export const SectionArea = styled.div`
display: flex;
align-items: center;
padding: 20px 15px;
`


export const Title = styled.div`
  
`

export const Bars = styled.div`
display: flex;
font-size: 25px;
margin-left: 50px;

svg{
    cursor: pointer;
    color: #FF8C32;
}
`



export const Icon = styled.div`

`

export const Text = styled.div`

`

export const ContainerLink = styled.a`
display: flex;
font-size: 25px;
padding: 15px 10px;
gap: 15px;
text-decoration: none;
color: #FF8C32;
cursor: pointer;
background-color: #020024;


:hover{
    background-color: #FF8C32;
    color:#06113C;
    transition: all 1s;
    font-weight: bold;
}

.active{
    
    color: white;
}
`
