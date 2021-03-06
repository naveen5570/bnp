import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <>
    

    <Script src="fabric.js"/>
  <meta charSet="utf-8" />
  <title>BNP</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossOrigin="anonymous"
  />
  <link rel="stylesheet" type="text/css" href="style.css" />
  <div className="container-fluid">
    <header>
      <img src="img/header.png" width="100%" />
    </header>
  </div>
  <div className="container-fluid canva-top">
    <div className="row">
      <div className="form-group text1">
        <span className="close">x</span>
        <img src="img/template-i.png" />
      </div>
      <div className="form-group text">
        <span className="close">x</span>
        <label htmlFor="exampleInputEmail1">Add Text to Canvas</label>
        <input type="text" className="add-text form-control" /> <br />
        <button className="add-text-btn btn btn-info">Add Text</button>
        {/*<button class="save-btn btn btn-success">Save</button>*/}
      </div>
      <div className="form-group img">
        <span className="close">x</span>
        <label htmlFor="exampleInputEmail1">Upload Image to Canvas</label>
        <br />
        <input type="file" id="file" className="form-control" />
        {/*<button class="save-btn btn btn-success">Save</button>*/}
      </div>
      <div className="col-md-1 left_icons">
        <span className="click_template">
          <img src="img/template.jpg" />
        </span>
        <span className="click_text">
          <img src="img/text.jpg" />
        </span>
        <span>
          <img src="img/background.jpg" />
        </span>
        <span>
          <img src="img/shapes.jpg" />
        </span>
        <span>
          <img src="img/clipart.jpg" />
        </span>
        <span className="click_img">
          <img src="img/uploads.jpg" />
        </span>
        <span>
          <img src="img/design-comments.jpg" />
        </span>
        <span>
          <img src="img/quick-help.jpg" />
        </span>
        <span>
          <img src="img/layers.jpg" />
        </span>
      </div>
      <div className="col-md-8 canvas_main">
        <canvas id="canvas" width={500} height={300} />
        <a href="" id="txt" target="_blank" />
        <br />
        <img id="preview" />
        <div className="zoom">
          <img src="img/zoom.png" />
        </div>
      </div>
      <div className="col-md-3">
        <div className="form-group">
          <label htmlFor="Size">Size</label>
          <br />
          <select name="size" id="size">
            <option value="size1">3x2</option>
            <option value="size2">2x3</option>
            <option value="size3">2x4</option>
          </select>
          <select name="size" id="size">
            <option value="size1">ft</option>
            <option value="size2">inch</option>
          </select>
        </div>
        <div className="form-group"></div>
        <br />
        <input
          type="button"
          id="delete"
          className="save-btn btn btn-danger"
          defaultValue="Delete selection"
        />
        <br />
        <br />
        <img src="img/price.png" />
        <br />
        <br />
        <div id="sku">
        <input type="text" id="sku1" placeholder="Product SKU" className="form-control" /><br/>
        <button className="save-btn btn btn-success save1">Save Canvas</button>
        </div>
        <div id="sku2">
        <input type="text" id="sku11" placeholder="Product SKU" className="form-control" /><br/>
        <button className="save-btn btn btn-success restore1">Restore Canvas</button>
        </div>
        <button className="save-btn btn btn-success save">Save</button>
        &nbsp;
        <button className="save-btn btn btn-success restore">Restore</button>
      </div>
    </div>
    
  </div>
  <div className="overlay"></div>
  <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"/>
</>
  )
}

export default Home
