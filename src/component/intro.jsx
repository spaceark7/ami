import React from "react";
import "../styles/intro.css";
import { Component } from "react";

class Intro extends Component {
  constructor(props) {
    super(props);
    this.bg_ref = React.createRef();
    this.bg = this.bg_ref.current;
    console.log(this.bg);
  }

  render() {
    window.addEventListener("scroll", function () {
      let value = window.scrollY;
      this.bg.style.backgroundSize = 100 + value * 2 + "px";
    });

    return (
      <div className="intro">
        <h2 className="intro-Header">Ketika hati telah memilih ...</h2>
        <div className="banner">
          <section></section>
          <div ref={this.bg_ref} id="bg"></div>
        </div>
        <div className="container">
          <h2 className="intro-title">
            Tuhan tahu siapa yang bersungguh - sungguh ...
          </h2>
          <p className="intro-description">
            Entah mengapa hati ini tergerak saat melihatmu dan tingkah lakumu
            yang ceroboh supaya diri ini ada disampingmu dan bisa menjagamu.
            Memang tidak mudah untuk meyakinkanmu meskipun niat tulus hadir
            dalam hati.
            <br />
            <br />
            Mungkin memang harus seperti inilah kenyataannya, tuhan punya
            rencana agar cerita kita menghadirkan sebuah arti. Perihnya
            perjuanganku agar kau tetap disini, yang mana kau selalu mengelak
            karena luka dari cerita masa lalumu namun tidak menjadikan alasan
            tuk berhenti berjuang akan tetapi membuatku semakin lebih menghargai
            pentingya keberadaanmu.{" "}
            <strong> #AmiBegbeg #AmiDodol #Cinta</strong>
            <br />
          </p>
        </div>
      </div>
    );
  }
}

export default Intro;

// const Intro = () => {
//   const bg_ref = React.createRef();
//   let bg = bg_ref.current;
//   console.log(bg);
//   window.addEventListener("scroll", function () {
//     let value = window.scrollY;
//     bg.style.backgroundSize = 100 + value * 2 + "px";
//   });
//   return (

//   );
// };
