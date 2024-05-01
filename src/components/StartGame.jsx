import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = (props) => {
    return (
        <Container>
            <div>
                <img src="/images/dices.png" />
            </div>
            <div className="content">
                <h1>Dice Game</h1>
                <Button onClick={props.toggle}>Play Now</Button>
            </div>
        </Container>
    );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    /* border:1px solid black; */
    display: flex;
    flex-direction: column;
    align-items: end;
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
    
  }
`;
