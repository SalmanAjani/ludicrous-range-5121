
    let url0 = `https://cdn.shopify.com/s/files/1/0906/2558/products/3_24ebc645-031e-4544-ad8d-44c5373e7b1f.jpg?v=1657209588`;

    let url1 = `https://cdn.shopify.com/s/files/1/0906/2558/products/1_7cdc1fa6-fc3f-4cae-93c7-f940ff2da937.jpg?v=1657209586`;
    let url2 = `https://cdn.shopify.com/s/files/1/0906/2558/products/2_43d83a15-0d61-47e2-aefb-a5a1a4b8de85.jpg?v=1657209600`;
    let img = document.createElement("img");

    let big = document.getElementById("big");

    window.addEventListener("load", () => {
      big.innerHTML = null;
      img.src = url1;
      big.append(img);
      
    });

    function print(n) {
      let inner = document.querySelectorAll(".inner");
      big.innerHTML = null;
      if (n == 0) {
        img.src = url0;
      } else if (n == 1) {
        img.src = url1;
      } else if (n == 2) {
        img.src = url2;
      }
      big.append(img);
      //    console.log(img)
    }
    let content= document.getElementById("content");

    function description(){
      content.innerHTML =null;
      let p1= document.createElement("p")
      p1.innerText= "Do you prefer subtle and nude makeup or bold and feisty with a splash of colour? Well, you don't have to choose with SUGAR's beautifully curated makeup palettes that are designed with highly pigmented, incredible finishes and come in luxurious travel-friendly packaging for gorgeous looks on the go."
      let p2= document.createElement("p");
      p2.innerText="#OwnYourBeautyLook with this multi-functional makeup palette featuring a matte blush, bronzer and a shimmering highlighter for that endless glow and dimension. The palette also holds a gorgeous mix of six eyeshadow shades in matte, shimmer and high-shine finish textures for enthralling eye makeup looks. Extraordinarily easy to apply and made to 'pop' on all skin tones. Crafted for any style and occasion, SUGAR Contour De Force Eyes And Face Palette comes in two variants: 01 - Warm Win for light-to-medium skin tones and 02 - Pink Pro for medium-to-deep skin tones."
      let shades=document.createElement("h4")
      shades.innerText="Shades insluded:"
      let warm = document.createElement("h4")
      // warm win ul
      warm.innerText="01 - Warm Win"
      let ul1= document.createElement("ul")
      let wli1= document.createElement("li")
      wli1.innerText="Bronzer – Cool Brown Matte"
      let wli2= document.createElement("li")
      wli2.innerText=" Blush – Light Peach Matte "
      let wli3=document.createElement("li")
      wli3.innerText=" Highlighter – Sand Gold Metallic / Shimmer "
      let wli4=wli3=document.createElement("li")
      wli4.innerText=" L1 - Honey Peach Matte"
      let wli5=document.createElement("li");
      wli5.innerText="R1 – Champagne Metallic / Shimmer "
      let wli6= document.createElement("li")
      wli6.innerText=" L2 - Metallic Rust - Metallic / Shimmer"
      let wli7=document.createElement("li");
      wli7.innerText=" R2 – Copper Metallic / Shimmer"
      let wli8= document.createElement("li")
      wli8.innerText=" L3 – Basic Gold Metallic / Shimmer"
      let wli9=document.createElement("li")
      wli9.innerText="R3 – Plum Brown Matte"
      ul1.append(wli1,wli2,wli3,wli4,wli5,wli6,wli7,wli8,wli9)
      // pink pro ul
      let pink= document.createElement("h4")
      pink.innerText="02 - Pink Pro"
      let ul2= document.createElement("ul")
      let pli1= document.createElement("li")
      pli1.innerText="Bronzer – Deep Tan Matte "
      let pli2= document.createElement("li")
      pli2.innerText=" Blush – Salmon Pink Subtle Shimmer "
      let pli3= document.createElement("li")
      pli3.innerText=" Highlighter – True Gold Metallic/Shimmer"
      let pli4= document.createElement("li")
      pli4.innerText="L1 – Peach Nude Matte "
      let pli5= document.createElement("li")
      pli5.innerText=" R1 – Rose Gold High-Shine Foil "
      let pli6= document.createElement("li")
      pli6.innerText="L2- Metallic Rust – Mauve High-Shine Foil "
      let pli7= document.createElement("li")
      pli7.innerText=" R2 – Gold Metallic/Shimmer"
      let pli8= document.createElement("li")
      pli8.innerText="L3 – Deep Pink Matte"
      let pli9= document.createElement("li")
      pli9.innerText=" R3 – Rust Gold High-Shine Foil"
      ul2.append(pli1,pli2,pli3,pli4,pli5,pli6,pli7,pli8,pli9)
      //key features
      let key= document.createElement("h4")
      key.innerText="Key Features"
      let ul3= document.createElement("ul");
      let kli1= document.createElement("li")
      kli1.innerText="SUGAR Contour De Force Eyes And Face Palette 01 - Warm Win has an array of wearable warm-toned gold, brown and peach shades in matte and shimmer finishes"
      let kli2= document.createElement("li")
      kli2.innerText="Includes a cool-toned brown matte bronzer, a beautiful peach blush and a punch-packing sand gold highlighter in a shimmer finish that will give you a glow that’s hard to ignore"
      let kli3= document.createElement("li")
      kli3.innerText="SUGAR Contour De Force Eyes And Face Palette 02 - Pink Pro stars a swathe of vibrant pinks, lilac, copper and rose gold hues you're bound to adore"
      let kli4= document.createElement("li")
      kli4.innerText="This palette comes with a flattering deep tan matte bronzer, a salmon pink blush with hints of shimmer and an unmatched, glow-giving true gold highlighter in a ravishing shimmer finish"
      let kli5= document.createElement("li")
      kli5.innerText="The shades included in this palette are intensely rich in pigment, effortlessly blendable and deliver an intense colour payoff"
      let kli6= document.createElement("li")
      kli6.innerText="Long-lasting formula that stays without creasing or smudging"
      let kli7= document.createElement("li")
      kli7.innerText="These makeup palettes are cruelty-free, vegan and the shades are non-comedogenic"
      let netw= document.createElement("h4")
      netw.innerHTML="<b>Net Weight: <b>"
      let netwp= document.createElement("p")
      netwp.innerHTML= netw.innerHTML+'20.3g/0.72 Oz.'
      let mrtp= document.createElement("h4")
      mrtp.innerHTML="<b>Maximum Retail Price :</b>"
      let rtp= document.createElement("p")
      rtp.innerHTML= mrtp.innerHTML+` Rs.1099/- (incl. of taxes)`
      let cnt= document.createElement("h4")
      cnt.innerHTML="<b>Country Of Origin :</b>"
      let origin= document.createElement("p")
      origin.innerHTML=cnt.innerHTML+`India`
      let ca= document.createElement("p")
      ca.innerHTML="<b>Company Address :</b>"+"<span>Vellvette Lifestyle Pvt. Ltd., B-1004, Palatial Heights, Andheri (E), Mumbai 400072</span>"
      
      content.append(p1,p2,shades,warm,ul1,ul2,ul3,netwp,rtp,origin,ca)
      console.log(content)
    }
