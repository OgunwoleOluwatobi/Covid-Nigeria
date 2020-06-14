import React, { Component } from 'react';
import styled from 'styled-components';
import Display from './Display';
import Info from './Info';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/1337.css';
import { media, theme } from '../styles';
import './Hero.css';
const { colors } = theme;

const Container = styled.div`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 130vh;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 30px;
    ${media.bigDesktop`
        justify-content: center;
    `}
    ${media.desktop`
        justify-content: flex-end;
    `}
    .img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 120vh;        
        z-index: 0;
        transform: skewY(10deg);
        transform-origin: top right;
        object-fit: cover;
    }
`;

const Hold = styled.div`
    z-index: 2;
    width: 60vw;
    padding-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${media.bigDesktop`
        width: 100vw;
        padding-left: 40px;
        padding-right: 40px;
    `}
    ${media.tablet`
        padding-top: 80px;
        width: 100vw;
    `}
    ${media.phone`
        padding-top: 80px;
        padding-left: 15px;
        padding-right: 15px;
        width: 100vw;
    `}
`;

const Note = styled.div`
    width: 100%;
    padding: 0 4.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${media.phablet`
        padding: 0 0.5rem;
    `}
`;

const Head = styled.h1`
    font-size: 45px;
    margin-bottom: 10px;
    text-align: center;
    ${media.desktop`
        margin: 10px 0;
    `}
    ${media.phablet`
        font-size: 40px;
    `}
    ${media.phone`
        font-size: 30px;
    `}
`;

const Subtext = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 20px;
  color: ${colors.dustyWhite};
  ${media.desktop`
    margin: 15px 0;
  `}
  ${media.tablet`
    margin: 30px 0;
  `}
  ${media.phablet`
    font-size: 22px;
    margin: 20px 0;
  `}
  ${media.phone`
    font-size: 20px;
    margin: 20px 0;
  `}
`;

const Docb = styled.a`
    text-decoration: none;
    background: ${colors.deepPale};
    color: white;
    padding: 1rem 1.5rem;
    font-size: 18px;
    font-weight: 600;
    margin: 0;
    border-radius: 5px;
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.1);
    ${media.phablet`
        font-size: 16px;
        padding: 0.95rem 1rem;
    `}
`;

const ApiBox = styled.div`
    width: 700px;
    height: 600px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    margin-top: 20px;
    ${media.bigDesktop`
        width: 700px;
        height: 600px;
    `}
    ${media.desktop`
        width: 600px;
        height: 550px;
    `}
    ${media.tablet`
        width: 550px;
        height: 700px;
    `}
    ${media.thone`
        width: 500px;
        height: 450px;
    `}
    ${media.phablet`
        width: 400px;
        height: 500px;
    `}
    /* ${media.phone`
        width: 300px;
        height: 350px;
    `} */
    ${media.phone`
        width: 350px;
        height: 450px;
        box-shadow: 0 1px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        border-radius: 15px;
    `}
`;

const ApiHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding: 0.85rem 0rem;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 16px;
    margin: 0;
  }
`;

const ApiHold = styled.div`
  width: 100%;
  height: 530px;
  overflow: auto;
  padding: 0 0.9rem;
  ${media.bigDesktop`
    height: 530px;
  `}
  ${media.desktop`
    height: 480px;
  `}
  ${media.tablet`
    height: 630px;
  `}
  ${media.phablet`
    height: 430px;
  `}
  ${media.phone`
    height: 380px;
  `}
`;

export default class Hero extends Component {
  render() {
    var data = {
      "date": "140520",
      "day": "Thu",
      "data": [
          {
              "state": "Lagos",
              "totalConfirmedCases": "2099",
              "totalNewConfirmedCases": "58",
              "totalDischargedCases": "541",
              "totalNewDischargedCases": "13",
              "totalDeaths": "33",
              "totalNewDeaths": "0",
              "totalActiveCases": "1525",
              "daysSinceLastReported": "0"
          },
          {
              "state": "Kano",
              "totalConfirmedCases": "753",
              "totalNewConfirmedCases": "46",
              "totalDischargedCases": "87",
              "totalNewDischargedCases": "8",
              "totalDeaths": "33",
              "totalNewDeaths": "0",
              "totalActiveCases": "633",
              "daysSinceLastReported": "0"
          },
          {
              "state": "FCT",
              "totalConfirmedCases": "379",
              "totalNewConfirmedCases": "9",
              "totalDischargedCases": "82",
              "totalNewDischargedCases": "10",
              "totalDeaths": "7",
              "totalNewDeaths": "0",
              "totalActiveCases": "290",
              "daysSinceLastReported": "0"
          },
          {
              "state": "Katsina",
              "totalConfirmedCases": "224",
              "totalNewConfirmedCases": "0",
              "totalDischargedCases": "29",
              "totalNewDischargedCases": "4",
              "totalDeaths": "12",
              "totalNewDeaths": "0",
              "totalActiveCases": "183",
              "daysSinceLastReported": "1"
          },
          {
              "state": "Bauchi",
              "totalConfirmedCases": "207",
              "totalNewConfirmedCases": "1",
              "totalDischargedCases": "25",
              "totalNewDischargedCases": "0",
              "totalDeaths": "3",
              "totalNewDeaths": "0",
              "totalActiveCases": "179",
              "daysSinceLastReported": "0"
          },
          {
              "state": "Borno",
              "totalConfirmedCases": "191",
              "totalNewConfirmedCases": "3",
              "totalDischargedCases": "20",
              "totalNewDischargedCases": "0",
              "totalDeaths": "20",
              "totalNewDeaths": "0",
              "totalActiveCases": "151",
              "daysSinceLastReported": "0"
          },
          {
              "state": "Jigawa",
              "totalConfirmedCases": "176",
              "totalNewConfirmedCases": "35",
              "totalDischargedCases": "4",
              "totalNewDischargedCases": "0",
              "totalDeaths": "3",
              "totalNewDeaths": "0",
              "totalActiveCases": "169",
              "daysSinceLastReported": "0"
          },
          {
              "state": "Ogun",
              "totalConfirmedCases": "134",
              "totalNewConfirmedCases": "7",
              "totalDischargedCases": "57",
              "totalNewDischargedCases": "11",
              "totalDeaths": "5",
              "totalNewDeaths": "0",
              "totalActiveCases": "72",
              "daysSinceLastReported": "0"
          },
          {
              "state": "Gombe",
              "totalConfirmedCases": "124",
              "totalNewConfirmedCases": "5",
              "totalDischargedCases": "87",
              "totalNewDischargedCases": "22",
              "totalDeaths": "1",
              "totalNewDeaths": "0",
              "totalActiveCases": "36",
              "daysSinceLastReported": "0"
          },
          {
              "state": "Kaduna",
              "totalConfirmedCases": "114",
              "totalNewConfirmedCases": "0",
              "totalDischargedCases": "17",
              "totalNewDischargedCases": "0",
              "totalDeaths": "3",
              "totalNewDeaths": "0",
              "totalActiveCases": "94",
              "daysSinceLastReported": "1"
          },
          {
              "state": "Sokoto",
              "totalConfirmedCases": "112",
              "totalNewConfirmedCases": "0",
              "totalDischargedCases": "40",
              "totalNewDischargedCases": "0",
              "totalDeaths": "13",
              "totalNewDeaths": "0",
              "totalActiveCases": "59",
              "daysSinceLastReported": "1"
          },
          {
              "state": "Edo",
              "totalConfirmedCases": "92",
              "totalNewConfirmedCases": "3",
              "totalDischargedCases": "27",
              "totalNewDischargedCases": "1",
              "totalDeaths": "5",
              "totalNewDeaths": "1",
              "totalActiveCases": "60",
              "daysSinceLastReported": "0"
          },
          {
              "state": "Oyo",
              "totalConfirmedCases": "73",
              "totalNewConfirmedCases": "0",
              "totalDischargedCases": "16",
              "totalNewDischargedCases": "0",
              "totalDeaths": "2",
              "totalNewDeaths": "0",
              "totalActiveCases": "55",
              "daysSinceLastReported": "1"
          },
          {
              "state": "Zamfara",
              "totalConfirmedCases": "73",
              "totalNewConfirmedCases": "0",
              "totalDischargedCases": "18",
              "totalNewDischargedCases": "17",
              "totalDeaths": "5",
              "totalNewDeaths": "0",
              "totalActiveCases": "50",
              "daysSinceLastReported": "3"
          },
          {
              "state": "Kwara",
              "totalConfirmedCases": "56",
              "totalNewConfirmedCases": "3",
              "totalDischargedCases": "12",
              "totalNewDischargedCases": "3",
              "totalDeaths": "1",
              "totalNewDeaths": "0",
              "totalActiveCases": "43",
              "daysSinceLastReported": "0"
          },
          {
              "state": "Osun",
              "totalConfirmedCases": "42",
              "totalNewConfirmedCases": "0",
              "totalDischargedCases": "30",
              "totalNewDischargedCases": "0",
              "totalDeaths": "4",
              "totalNewDeaths": "0",
              "totalActiveCases": "8",
              "daysSinceLastReported": "1"
          },
          {
              "state": "Rivers",
              "totalConfirmedCases": "33",
              "totalNewConfirmedCases": "0",
              "totalDischargedCases": "5",
              "totalNewDischargedCases": "0",
              "totalDeaths": "3",
              "totalNewDeaths": "0",
              "totalActiveCases": "25",
              "daysSinceLastReported": "1"
          },
          {
              "state": "Yobe",
              "totalConfirmedCases": "32",
              "totalNewConfirmedCases": "12",
              "totalDischargedCases": "3",
              "totalNewDischargedCases": "3",
              "totalDeaths": "1",
              "totalNewDeaths": "0",
              "totalActiveCases": "28",
              "daysSinceLastReported": "0"
          },
          {
              "state": "Kebbi",
              "totalConfirmedCases": "31",
              "totalNewConfirmedCases": "0",
              "totalDischargedCases": "11",
              "totalNewDischargedCases": "6",
              "totalDeaths": "4",
              "totalNewDeaths": "1",
              "totalActiveCases": "16",
              "daysSinceLastReported": "1"
          },
          {
              "state": "Nasarawa",
              "totalConfirmedCases": "29",
              "totalNewConfirmedCases": "1",
              "totalDischargedCases": "5",
              "totalNewDischargedCases": "5",
              "totalDeaths": "1",
              "totalNewDeaths": "0",
              "totalActiveCases": "23",
              "daysSinceLastReported": "0"
          },
          {
              "state": "Plateau",
              "totalConfirmedCases": "25",
              "totalNewConfirmedCases": "5",
              "totalDischargedCases": "4",
              "totalNewDischargedCases": "0",
              "totalDeaths": "0",
              "totalNewDeaths": "0",
              "totalActiveCases": "21",
              "daysSinceLastReported": "0"
          },
          {
              "state": "Delta",
              "totalConfirmedCases": "22",
              "totalNewConfirmedCases": "0",
              "totalDischargedCases": "9",
              "totalNewDischargedCases": "3",
              "totalDeaths": "4",
              "totalNewDeaths": "1",
              "totalActiveCases": "9",
              "daysSinceLastReported": "1"
          },
          {
              "state": "Adamawa",
              "totalConfirmedCases": "21",
              "totalNewConfirmedCases": "0",
              "totalDischargedCases": "7",
              "totalNewDischargedCases": "3",
              "totalDeaths": "0",
              "totalNewDeaths": "0",
              "totalActiveCases": "14",
              "daysSinceLastReported": "3"
          },
          {
              "state": "Ondo",
              "totalConfirmedCases": "19",
              "totalNewConfirmedCases": "1",
              "totalDischargedCases": "11",
              "totalNewDischargedCases": "0",
              "totalDeaths": "1",
              "totalNewDeaths": "0",
              "totalActiveCases": "7",
              "daysSinceLastReported": "0"
          },
          {
              "state": "Akwa Ibom",
              "totalConfirmedCases": "17",
              "totalNewConfirmedCases": "0",
              "totalDischargedCases": "12",
              "totalNewDischargedCases": "0",
              "totalDeaths": "2",
              "totalNewDeaths": "0",
              "totalActiveCases": "3",
              "daysSinceLastReported": "7"
          },
          {
              "state": "Taraba",
              "totalConfirmedCases": "17",
              "totalNewConfirmedCases": "0",
              "totalDischargedCases": "1",
              "totalNewDischargedCases": "0",
              "totalDeaths": "0",
              "totalNewDeaths": "0",
              "totalActiveCases": "16",
              "daysSinceLastReported": "4"
          },
          {
              "state": "Ekiti",
              "totalConfirmedCases": "15",
              "totalNewConfirmedCases": "0",
              "totalDischargedCases": "9",
              "totalNewDischargedCases": "0",
              "totalDeaths": "1",
              "totalNewDeaths": "0",
              "totalActiveCases": "5",
              "daysSinceLastReported": "4"
          },
          {
              "state": "Enugu",
              "totalConfirmedCases": "12",
              "totalNewConfirmedCases": "0",
              "totalDischargedCases": "2",
              "totalNewDischargedCases": "0",
              "totalDeaths": "0",
              "totalNewDeaths": "0",
              "totalActiveCases": "10",
              "daysSinceLastReported": "1"
          },
          {
              "state": "Niger",
              "totalConfirmedCases": "10",
              "totalNewConfirmedCases": "0",
              "totalDischargedCases": "2",
              "totalNewDischargedCases": "0",
              "totalDeaths": "0",
              "totalNewDeaths": "0",
              "totalActiveCases": "8",
              "daysSinceLastReported": "1"
          },
          {
              "state": "Ebonyi",
              "totalConfirmedCases": "9",
              "totalNewConfirmedCases": "0",
              "totalDischargedCases": "0",
              "totalNewDischargedCases": "0",
              "totalDeaths": "0",
              "totalNewDeaths": "0",
              "totalActiveCases": "9",
              "daysSinceLastReported": "1"
          },
          {
              "state": "Imo",
              "totalConfirmedCases": "7",
              "totalNewConfirmedCases": "4",
              "totalDischargedCases": "2",
              "totalNewDischargedCases": "1",
              "totalDeaths": "0",
              "totalNewDeaths": "0",
              "totalActiveCases": "5",
              "daysSinceLastReported": "0"
          },
          {
              "state": "Bayelsa",
              "totalConfirmedCases": "6",
              "totalNewConfirmedCases": "0",
              "totalDischargedCases": "3",
              "totalNewDischargedCases": "0",
              "totalDeaths": "0",
              "totalNewDeaths": "0",
              "totalActiveCases": "3",
              "daysSinceLastReported": "4"
          },
          {
              "state": "Benue",
              "totalConfirmedCases": "4",
              "totalNewConfirmedCases": "0",
              "totalDischargedCases": "0",
              "totalNewDischargedCases": "0",
              "totalDeaths": "0",
              "totalNewDeaths": "0",
              "totalActiveCases": "4",
              "daysSinceLastReported": "2"
          },
          {
              "state": "Abia",
              "totalConfirmedCases": "2",
              "totalNewConfirmedCases": "0",
              "totalDischargedCases": "1",
              "totalNewDischargedCases": "0",
              "totalDeaths": "0",
              "totalNewDeaths": "0",
              "totalActiveCases": "1",
              "daysSinceLastReported": "12"
          },
          {
              "state": "Anambra",
              "totalConfirmedCases": "2",
              "totalNewConfirmedCases": "0",
              "totalDischargedCases": "1",
              "totalNewDischargedCases": "0",
              "totalDeaths": "0",
              "totalNewDeaths": "0",
              "totalActiveCases": "1",
              "daysSinceLastReported": "1"
          }
      ]
  }

    return (
      <>
        <Container>
            <div className="Container"></div>
            <Hold>
                <Note>
                    <Head>Coronavirus Api For Nigeria</Head>
                    <Subtext>Get up-to-date, quality and well detailed data for the coronavirus for all states all over nigeria</Subtext>
                    <Docb href="https://documenter.getpostman.com/view/9044884/SztK1jM5">Api Documentation</Docb>
                </Note>
              <ApiBox>
                <ApiHeader><p>Api Response Sample</p></ApiHeader>
                <ApiHold>
                  <JSONPretty id="json-pretty" style={{fontSize: "16px"}}
                    data={data}
                    space="6" 
                    mainStyle="padding:1em;line-height:1.6;color:#A4A4A4;background:#fff;overflow:auto;font-size:20px"
                    valueStyle="font-size:20px"
                    stringStyle="font-size:16px;color:#14A085;font-weight:500;"
                    keyStyle="font-size:16px; line-height:1.5;color:#000;font-weight:600;"></JSONPretty>
                </ApiHold>
              </ApiBox>
            </Hold>
        </Container>
        <Info />
        <Display data={this.props.data} />
      </>
    )
  }
}
