import styled from 'styled-components';

import {colors} from '../../assets/colors'

export const Container = styled.div`
    background: ${colors['light-blue']};

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        margin: 0 auto;
        margin-bottom: 20px;

        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);


        div {
            display: flex;
            align-items: center;
            background-color: ${colors.gray};
            padding: 2px 5px;
            border-radius: 4px;
            border: 1px solid black;
            
            svg {
                border: 1px solid black;
                background-color: #fff;
                padding: 3px;
                border-radius: 4px;
            }

            strong {
                margin-left: 15px;
                font-size: 26px;
            }
        }

        h1 {
            font-size: 18px;
        }

        ul {
            list-style: none;
            font-size: 12px;
            line-height: 20px;
            background-color: ${colors.gray};
            padding: 3px 5px;
            border-radius: 4px;
            border: 1px solid black;
            
            li {
                display: flex;
                //align-items: baseline;            
                line-height: 26px;

                span {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #fff;
                    color: black;
                    font-size: 12px;
                    font-weight: bold;
                    padding: 2px 5px;
                    margin-left: 4px;
                    border-radius: 8px;
                    line-height: 16px;
                    border: 1px solid black;
                    margin-bottom: 3px;
                }
                
                svg {
                    font-size: 20px;
                    margin-right: 10px;
                }
            }
        }
    }

`;
