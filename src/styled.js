import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hsl(27, 66%, 92%);
    width: 100%;
    height: 100vh;

    @media (max-width: 375px){
        max-width: 375px;
    }
`;

export const Graphic = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 375px;
    width: 100%;
    gap: 12px;

    @media (max-width: 375px){
        max-width: 340px;
    }
`;

export const NavBalance = styled.nav`
    display: flex;
    background-color: hsl(10, 79%, 65%);
    justify-content: space-around;
    align-items: center;
    gap: 140px;
    padding: 0 1%;
    border-radius: 12px;

    & div{
        display: flex;
        flex-direction: column;
        padding: 12px 0;
        gap: 8px;

        & p{
            font-size: 11px;
            margin: 0;
            color: hsl(27, 66%, 92%);
        }
    }

    & img{
        height: 30px;
    }
`;

export const ValorNav = styled.nav`
    color: #fff;
    font-size: 20px;
    font-weight: 400;
`;

// -----------------------------------------------

export const ContentBalance = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 22px;
    border-radius: 8px;
    background-color: whitesmoke;
`;

export const Balance = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 16px;
    padding-top: 8px;
    border-bottom: 0.3px solid hsl(27, 66%, 92%);

    & .Tilte-balance{
        font-size: 21px;
        font-weight: 700;
        color: hsl(25, 70%, 15%);
    }

    & div{
        display: flex;
        width: 100%;
        padding-top: 10px;
        gap: 8px;
    }
`;

export const Tabela = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 2px;
    margin: 0;

    & div.Barra1{
        position: relative;
        width: 100%;
        margin: 0;
        padding: 0;
        border-radius: 4px;
        cursor: pointer;
    }

    & p{
        margin: 0;
        padding: 0;
        width: 100%;
        text-align: center;
        font-size: 0.6em;
        color: rgb(153, 153, 153);
    }
`;

export const Modal = styled.span`
    position: absolute;
    display: none;
    right: -7.5px;
    top: -30px;
    font-size: 11px;
    font-weight: 700;
    padding: 4px 8px;
    justify-content: center;
    align-items: center;
    background-color: hsl(25, 45%, 11%);
    color: hsl(100, 45%, 100%);
    border-radius: 4px;
`;

// --------- footer Card ---------------- 

export const FooterCard = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 20px;
    padding: 14px 0;
    margin-bottom: 8px;
    opacity: 0.9;

    & div.Info1{
        display: flex;
        justify-content: center;
        flex-direction: column;

        & p{
            margin: 0;
            padding: 0;
            font-size: 12px;
            color: rgb(153, 153, 153);
        }

        & h1{
            margin: 0;
            padding: 0;
            font-size: 30px;
            color: hsl(25, 45%, 11%);
        }
    }

    & div.Info2{
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;

        & h3{
            margin: 0;
            padding: 0;
            font-size: 12px;
            text-align: right;
        }

        & p{
            margin: 0;
            padding: 0;
            font-size: 14px;
            text-align: right;
            color: rgb(153, 153, 153);
        }
    }
`;