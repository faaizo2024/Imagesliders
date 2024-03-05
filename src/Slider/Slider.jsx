


import { useState } from "react"



function Slider(){


    const [index, stIndex] = useState(0)

    // function update the state

    const  handlenext = () => {
       
        if(index < images.length -1){
            stIndex(index + 1)
    }
}

    // function handleprev
    const handleprev = () =>{
     if(index > 0){
        stIndex(index - 1)
     }
        
    }

    const images = [
  
        "https://img.freepik.com/free-photo/beautiful-view-empire-states-skyscrapers-new-york-city_181624-6295.jpg?size=626&ext=jpg&ga=GA1.2.506855519.1703226778&semt=sph",
        "https://img.freepik.com/free-photo/central-park-manhattan-new-york-huge-beautiful-park-surrounded-by-skyscraper-with-pond_181624-50335.jpg?size=626&ext=jpg&ga=GA1.1.506855519.1703226778&semt=sph" , 
        "https://img.freepik.com/free-photo/new-york-city_649448-1679.jpg?size=626&ext=jpg&ga=GA1.1.506855519.1703226778&semt=sph",
        "https://img.freepik.com/free-photo/lule-chicken-kebab-with-vegetables-table_140725-6705.jpg?t=st=1708971228~exp=1708974828~hmac=dda7222bdffb5c5520b56ca57cb35684045694a0d5d28896c201b844f443e006&w=740"
    ]
    
  



    return <div> 
     <div class="bg-pink-500 p-6">
    <h1 class="text-white text-4xl">Explore different Cities</h1>
</div>


    <img class="w-[1090px] h-[550px] rounded mt-10 ml-10" src={images[index]} alt="" />
    
    <div class="text-center mt-5  space-x-1">
        <button onClick={handleprev}  class="bg-pink-500 px-4 py-2 text-4xl text-white rounded ml-5 ">prev</button>
        <button onClick={handlenext} class="bg-green-500 px-4 py-2 text-4xl text-white rounded">next</button>
    </div>
        
  

</div>
}



export default  Slider;