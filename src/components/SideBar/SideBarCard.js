import styled from 'styled-components';

import userIcon from '../../img/png/dog.png';
import { $media_medium } from '../constants/breakpoints';
import { fadeIn } from '../constants/styles';
const SideBarCardWrapper = styled.div`
  height: 42px;
  width: 100%;
  overflow: hidden;
  animation: 0.25s ${fadeIn} ease;

  & > a {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 5px 5px;
    text-decoration: none;
  }

  :hover {
    background-color: #e6e6ea;
  }
`;

const CardAvatar = styled.div`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  & > img {
    width: 100%;
  }
  ${$media_medium} {
    * {
      display: block;
    }
  }
`;

const CardInfoWrapper = styled.div`
  width: 190px;
  max-width: 190px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${$media_medium} {
    display: none;
  }
`;

const CardData = styled.div`
  height: 38px;
  width: 120px;
  margin-left: 10px;
  broder: 1px solid yellow;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`;
const DataTitle = styled.p`
  font-family: sans-serif;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #1f1f23;
  line-height: 1;
`;
const DataGame = styled.p`
  height: 19px;
  font-family: sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #53535f;
  line-height: 1.2;
`;
const CardStatus = styled.div`
  font-family: inherit;
  font-size: 17px;
  font-weight: 600;
  margin-left: 5px;
  display: flex;
  align-items: center;
  justify-contenr: center;
  white-space: nowrap;
  color: #53535f;

  & > div {
    width: 8px;
    height: 8px;
    background-color: #e91916;
    border-radius: 4px;
  }

  & > p {
    margin-left: 5px;
  }
`;

const SideBarCard = ({ value }) => {
  return (
    <>
      <SideBarCardWrapper>
        <a href="@">
          <CardAvatar>
            <img src={userIcon} alt=""></img>
          </CardAvatar>
          <CardInfoWrapper>
            <CardData>
              <DataTitle>{value.name}</DataTitle>
              <DataGame>{value.game}</DataGame>
            </CardData>
            {value.status === 'online' ? (
              <CardStatus>
                <div></div>
                <p>{value.audience}</p>
              </CardStatus>
            ) : (
              <CardStatus>
                <p>??????</p>
              </CardStatus>
            )}
          </CardInfoWrapper>
        </a>
      </SideBarCardWrapper>
    </>
  );
};

export default SideBarCard;
