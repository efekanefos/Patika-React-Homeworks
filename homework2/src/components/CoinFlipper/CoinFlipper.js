import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "yazi",
      flipping: false,
      totalTura: 0,
      totalYazi: 0,
      totalFlip: 0,
    };
  }
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    /*
    this.setState({ totalFlip: ++this.state.totalFlip });
    */
    this.setState((prev) => {
      return {
        totalFlip: prev.totalFlip + 1,
      };
    });
    let randomCoin = Math.round(Math.random() * 1);
    if (randomCoin === 0) {
      randomCoin = "tura";
      this.setState((prev) => {
        return {
          totalTura: prev.totalTura + 1,
        };
      });
    } else {
      randomCoin = "yazi";
      this.setState((prev) => {
        return {
          totalYazi: prev.totalYazi + 1,
        };
      });
    }
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);
    this.setState({ side: randomCoin });
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.totalFlip} </strong>
          atıştan
          <strong> {this.state.totalTura} </strong>ü tura
          <strong> {this.state.totalYazi} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
