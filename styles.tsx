import styled from 'styled-components';

type Direction = 'Top' | 'Bottom' | 'Center';

interface CookieWrapperProps {
    fullSize:boolean;
    backgroundColor?: string
    cookieDirection?: Direction;
}
interface ButtonProps {
    width?: string;
}
interface RowProps {
    width?: string;
}

    //STYLEING
    export const CookieHeadline = styled.h3`
        font-size:22px;
        font-weight:bold;
        margin:22px 0;
    `;
    export const CookieBody = styled.p`
        padding:0;
        line-height:26px;
        font-size:12px;
    `;
    export const CookieRow = styled.div<RowProps>`
        display:flex;
        flex-direction:row;
        flex-wrap: wrap;
        & button:first-child {
            margin-right:22px;
        }
        margin:24px 0;
    `;
    export const CookieCustomise = styled.div`
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
        flex-wrap:wrap;
        width:100%;
        & button  {
            background:green;
            color:#fff;
            font-weight:bold;
            &:active {
                background:#ccc;
                color:#000;
            }
        }
    `;
    export const CookieCheckbox = styled.input.attrs({ type: 'checkbox' })`
    padding:10px;
    `;
    export const CookieFormGroup = styled.div`
    display:flex;
    flex-direction:column;
    margin-right:24px;
    width:auto%;
    font-weight:bold;
    & label {
        margin-bottom:12px;
        width:100%;
    }
    & p {
        font-size:12px;
        font-weight:normal;
        margin-top:12px;
    }
    `;
    export const CookieWrapper = styled.div<CookieWrapperProps>`
        background: ${(props) => props.backgroundColor ? props.backgroundColor : '#efefef'};
        position:fixed;
        width:${(props) => props.cookieDirection ==="Center" ? "60%" : "100%"};
        @media only screen and (max-width: 786px) {
            width:${(props) => props.cookieDirection ==="Center" ? "90%" : "100%"};
        }
        left:0;
        border-top:1px solid #ccc;
        padding: 20px 10vw;
        transition:ease all 0.3s;
        bottom: ${(props) => props.cookieDirection ==="Bottom" && "0"};
        top: ${(props) => props.cookieDirection === "Top" ? "0" : props.cookieDirection === "Center" && "50%"};
        left: ${(props) => props.cookieDirection ==="Center" && "50%"};
        transform: ${(props) => props.cookieDirection ==="Center" && "translate(-50%,-50%)"};
        box-shadow:0 0 5vh rgba(0,0,0,0.9);
        max-height:75vh;
        padding:42px;
        padding-bottom: ${(props) => props.fullSize && "2.5vh"};
        overflow:scroll;
        z-index:999999;
        
    `;
    export const CookieButton = styled.button<ButtonProps>`
        padding:10px 20px;
        display:flex;
        align-items:center;
        font-size:12px;
        background:#efefef;
        border:1px solid #ccc;
        border-radius:20px;
        cursor: pointer;
        margin-bottom:12px;
        color:#ccc;
        transition:ease all 0.3s;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
         -khtml-user-select: none;
           -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
        &:active {
            background:#ccc;
            color:#fff;
        }
        &:first-child {
            background:green;
            color:#fff;
            font-weight:bold;
            &:active {
                background:#ccc;
                color:#000;
            }
        }
`;