
import Link from "next/link"
import Image from "next/image"
import Logoone from "../public/logoone.jpg"


export default function Header(){
return(

<div className="header">
    
<div className="logoone">
    <Image src = {Logoone} alt="logo" width={70.1} height={43} />
    </div>
  
<ul className="header-button">

<Link href= {"/"}><li><button className="button">MAIN</button></li></Link>
<Link href= {"/Gallery"}> <li>GALLERY</li></Link>
<Link href= {"/Project"}><li>PROJECT</li></Link>
<Link href= {"/Certification"}><li>CERTIFICATION</li></Link>
<Link href= {"/Contact"}><li>CONTACT</li></Link>
   
  

</ul>




</div>





)
    








}