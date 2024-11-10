
import Image from "next/image"
import sampleone from "@/app/public/sampleone.jpeg"
import rightarrow from "@/app/public/rightarrow.png"
import leftarrow from "@/app/public/leftarrow.png"



export default function Main(){
return(
<div>

<div className="main">
<Image src={sampleone} alt="sampleone" />
</div>
<div className="main2">
<h1 className="heading1">PROJECT</h1>
<h2 className="heading2">lorem</h2>
<div>
    <div className="arrow">
    <Image src={leftarrow} alt="" />
    <Image src={rightarrow} alt="" />
   
    </div>
    
</div>

</div>


</div>


)


}