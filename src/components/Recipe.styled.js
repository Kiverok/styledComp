import styled from "styled-components";


export const RecipeInfo = styled.div`
display: flex;
gap: 16px;
border: 1px solid black;
padding: 8px;
border-radius: 4px;
`;

export const InfoBlock = styled.div`
display: flex;
align-items: center;
gap: 12px;
`;

export const BadgeList = styled.div`
display: flex;
gap: 8px;
`;

export const Badge = styled.span`
padding: 8px 16px;
border-radius: 16px;
background-color: ${p => {
    return p.isActive ? "orangered" : "lightgray"
}};
color: ${p => {
    return p.isActive ? "white" : "black"
}}
`;
