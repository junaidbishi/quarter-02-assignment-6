
import Image from "next/image"
// import logo from "@/app/public/logo.jpeg"
import sampletwo from "@/app/public/sampletwo.jpeg"
import samplethree from "@/app/public/samplethree.jpeg"
import samplefour from "@/app/public/samplefour.png"
import Header from "../componenets/header"

export default function Gallery(){
return (
  <div>
    
   <Header/>
   <div className="gallery">
    <div className="samplefour">
      <Image src={sampletwo} alt="" />
      <Image src={samplefour} alt="" />
      </div>
      <div className="samplethree">
      <Image src={samplethree} alt="" />
      </div>

      <div className="about">
         <div className="align">
      <h1>ABOUT</h1>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
        Veniam dolorum
        autem, a magnam vero incidunt. <br />
        Obcaecati officia est a fugit ipsum <br />
        impedit cumque tempore reprehenderit eos ratione, commodi hic. Impedit?
      </p>
    </div>
      
    </div>


    {/* <div>
<h1>main focus/mission statement</h1>
<div>
<Image src={logo} alt="one" />
<Image src={logo} alt="two" />

</div>


    </div>  */}
  </div>
)


}
