
async function a(searchText,isshowall){
    const b = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const c = await b.json();
    const f = c.data
    e(f,isshowall)
}

function e (f,isshowall){
    const divid1 = document.getElementById('divid')

    const clear = divid1.innerText = '';
    
    
    //or innerContext use korte pari 
    // console.log(divid1)

    // console.log(f.length)

    const showbtn1= document.getElementById('showbtn')
      if(f.length>12 && !isshowall){
      showbtn1.classList.remove('hidden')
      }else {
        showbtn1.classList.add('hidden')
        
      }

      // console.log(isshowall)
      

    if(!isshowall){
      f= f.slice(0,12)
      
    }

     

    const g = f.map(element => {


    

        const div1 = document.createElement('div');
        div1.classList=('card w-96 bg-base-100 shadow-xl')
        div1.innerHTML=`
        
        <figure><img src="${element.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">${element.phone_name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-center">
                        <button class="btn btn-primary ">Buy Now</button>
                      </div>
                    </div>
        
        `
        divid1.appendChild(div1)

    });

    //  a() call speaner again to stop
    speaner1(false)
}





 function search(isshowall){


  // speaner call
  

     speaner1(true)

    const i = document.getElementById('search1');
    // console.log('hi ')

    const j = document.getElementById('input1');
    const k = j.value;
    // console.log(k)
    a(k,isshowall)
    // const clear = j.value= '';
 }



// speaner function
function speaner1 (isloding){
  const speaner = document.getElementById('speaner')
if(isloding){
  speaner.classList.remove('hidden')
}else{
  speaner.classList.add('hidden')
}

 
}


function showbtn11(){
  // const l = document.getElementById('showbtn')
  // console.log('ok')
  search(true)


  const j = document.getElementById('input1');
    
    

    const clear = j.value= '';

  

}
