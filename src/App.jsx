import './App.css'
import NavBar from './Components/NavBar'
import { navData } from './Components/NavBar'
import converterImg from "./assets/converter.png"
import ParagraphBox from './Components/ParagraphBox'
import { introDuctionData } from './Components/ParagraphBox'
import ConverterBox from './Components/ConverterBox'


function App() {
  return (
    <>
      <NavBar {...navData} />
      <div className="offerBar primary-ff">
        <h1>Free Shipping On Orders Over $75</h1>
      </div>

      <div className="banner primary-ff">
        <div className="container">
          <h1>Product Line</h1>
          <h2>Subtitle</h2>
        </div>

        <div className="banner_img">
          <img src={converterImg} alt="converterImg" />
        </div>
      </div>

      <ParagraphBox {...introDuctionData} />
      <ParagraphBox {...introDuctionData} />

      <div className="specsSection primary-ff">
        <div className="grid-title">
          <h1>Specs</h1>
        </div>
        <div className="myGrid container">
          <div className="row1">
            <div className="row-cont">
              <h1>01</h1>
              <h2>Spec 01</h2>
            </div>
            <div className="orange_underline"></div>
            <div className="row-cont">
              <h1>03</h1>
              <h2>Spec 03</h2>
            </div>
            <div className="orange_underline"></div>
          </div>

          <div className="specs_image">
            <img src={converterImg} alt="converterImg" />
          </div>

          <div className="row2">
            <div>
              <div className="row-cont">
                <h1>02</h1>
                <h2>Spec 02</h2>
              </div>
              <div className="orange_underline"></div>
            </div>
            <div>
              <div className="row-cont">
                <h1>04</h1>
                <h2>Spec 04</h2>
              </div>
              <div className="orange_underline"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="second_paragraph primary-ff">
        <div className="container">
          <h1>10R80 XPL PRO-LOC BILLET TORQUE CONVERTER 260MM</h1>
        </div>
        <ParagraphBox {...introDuctionData} />
        <ParagraphBox {...introDuctionData} />
      </div>

      <div className="converterGrid container">
        <ConverterBox />
        <ConverterBox />
        <ConverterBox />

        <ConverterBox />
        <div className="middle_convert primary-ff">
          <div className='image_wrap_middle'>
            <img src={converterImg} alt="middleConvert" id="middle_img" />
          </div>
          <h1>
            <span>10R80</span> XPL PRO-LOC BILLET TORQUE CONVERTER 260MM
          </h1>
        </div>
        <ConverterBox />
      </div>

      <footer>
        <div className="footer_banner primary-ff">
          <div className="container">
            {" "}
            <h1>10R80 XPL PRO-LOC BILLET TORQUE CONVERTER 260MM</h1>
          </div>
          <ParagraphBox {...introDuctionData} />
          <ParagraphBox {...introDuctionData} />
        </div>
        <div className="greyBar"></div>
      </footer>
    </>
  );
}

export default App
