import React from "react";
import { Balance, Container, ContentBalance, FooterCard, Graphic, Modal, NavBalance, Tabela, ValorNav } from "./styled";
import Symbol from "./images/logo.svg"


function App() {
  const [date, setDate] = React.useState([]);
  const Numeros = date.map(({amount}) => amount )
  const Maior = Math.max.apply( null, Numeros)

  React.useEffect(() => {
    const Data = require("./data.json")
    setDate(Data);
  },[])


  return (
    <Container>
      <Graphic>
        <NavBalance>
          <div>
            <p>My balance</p>
            <ValorNav>
               $921.48
            </ValorNav>
          </div>
          <img src={Symbol}/>
        </NavBalance>

        <ContentBalance>
          <Balance>
            <p className="Tilte-balance">Spending - Last 7 days</p>
            <div>
            {date && date.map( ({day, amount}) => (
              <Tabela key={day}>
                <div 
                  className="Barra1" 
                  style={{
                    height: amount * 2, 
                    backgroundColor: Maior == amount ? `hsl(186, 34%, 60%)` : `hsl(10, 79%, 65%)`
                  }}
                  onMouseOver={() => document.querySelector(`#${day}`).style.display = "flex"}
                  onMouseOut={() => document.querySelector(`#${day}`).style.display = "none"} 
                >
                  <Modal className={'Modal'} id={day}>${amount}</Modal>
                </div>
                <p>{day}</p>
              </Tabela>
            ))}
            </div>          
          </Balance>

          <FooterCard>
            <div className="Info1">
              <p>Total this month</p>
              <h1>$478.33</h1>
            </div>

            <div className="Info2">
              <h3>+2.4%</h3>
              <p>from last month</p>
            </div>
          </FooterCard>
        </ContentBalance>
      </Graphic>
    </Container>
  );
}

export default App;
