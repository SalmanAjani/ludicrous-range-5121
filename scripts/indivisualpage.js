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
let content = document.getElementById("content");

function description() {
  content.innerHTML = null;
  let p1 = document.createElement("p");
  p1.innerText =
    "Do you prefer subtle and nude makeup or bold and feisty with a splash of colour? Well, you don't have to choose with SUGAR's beautifully curated makeup palettes that are designed with highly pigmented, incredible finishes and come in luxurious travel-friendly packaging for gorgeous looks on the go.";
  let p2 = document.createElement("p");
  p2.innerText =
    "#OwnYourBeautyLook with this multi-functional makeup palette featuring a matte blush, bronzer and a shimmering highlighter for that endless glow and dimension. The palette also holds a gorgeous mix of six eyeshadow shades in matte, shimmer and high-shine finish textures for enthralling eye makeup looks. Extraordinarily easy to apply and made to 'pop' on all skin tones. Crafted for any style and occasion, SUGAR Contour De Force Eyes And Face Palette comes in two variants: 01 - Warm Win for light-to-medium skin tones and 02 - Pink Pro for medium-to-deep skin tones.";
  let shades = document.createElement("h4");
  shades.innerText = "Shades insluded:";
  let warm = document.createElement("h4");
  // warm win ul
  warm.innerText = "01 - Warm Win";
  let ul1 = document.createElement("ul");
  let wli1 = document.createElement("li");
  wli1.innerText = "Bronzer – Cool Brown Matte";
  let wli2 = document.createElement("li");
  wli2.innerText = " Blush – Light Peach Matte ";
  let wli3 = document.createElement("li");
  wli3.innerText = " Highlighter – Sand Gold Metallic / Shimmer ";
  let wli4 = (wli3 = document.createElement("li"));
  wli4.innerText = " L1 - Honey Peach Matte";
  let wli5 = document.createElement("li");
  wli5.innerText = "R1 – Champagne Metallic / Shimmer ";
  let wli6 = document.createElement("li");
  wli6.innerText = " L2 - Metallic Rust - Metallic / Shimmer";
  let wli7 = document.createElement("li");
  wli7.innerText = " R2 – Copper Metallic / Shimmer";
  let wli8 = document.createElement("li");
  wli8.innerText = " L3 – Basic Gold Metallic / Shimmer";
  let wli9 = document.createElement("li");
  wli9.innerText = "R3 – Plum Brown Matte";
  ul1.append(wli1, wli2, wli3, wli4, wli5, wli6, wli7, wli8, wli9);
  // pink pro ul
  let pink = document.createElement("h4");
  pink.innerText = "02 - Pink Pro";
  let ul2 = document.createElement("ul");
  let pli1 = document.createElement("li");
  pli1.innerText = "Bronzer – Deep Tan Matte ";
  let pli2 = document.createElement("li");
  pli2.innerText = " Blush – Salmon Pink Subtle Shimmer ";
  let pli3 = document.createElement("li");
  pli3.innerText = " Highlighter – True Gold Metallic/Shimmer";
  let pli4 = document.createElement("li");
  pli4.innerText = "L1 – Peach Nude Matte ";
  let pli5 = document.createElement("li");
  pli5.innerText = " R1 – Rose Gold High-Shine Foil ";
  let pli6 = document.createElement("li");
  pli6.innerText = "L2- Metallic Rust – Mauve High-Shine Foil ";
  let pli7 = document.createElement("li");
  pli7.innerText = " R2 – Gold Metallic/Shimmer";
  let pli8 = document.createElement("li");
  pli8.innerText = "L3 – Deep Pink Matte";
  let pli9 = document.createElement("li");
  pli9.innerText = " R3 – Rust Gold High-Shine Foil";
  ul2.append(pli1, pli2, pli3, pli4, pli5, pli6, pli7, pli8, pli9);
  //key features
  let key = document.createElement("h4");
  key.innerText = "Key Features";
  let ul3 = document.createElement("ul");
  let kli1 = document.createElement("li");
  kli1.innerText =
    "SUGAR Contour De Force Eyes And Face Palette 01 - Warm Win has an array of wearable warm-toned gold, brown and peach shades in matte and shimmer finishes";
  let kli2 = document.createElement("li");
  kli2.innerText =
    "Includes a cool-toned brown matte bronzer, a beautiful peach blush and a punch-packing sand gold highlighter in a shimmer finish that will give you a glow that’s hard to ignore";
  let kli3 = document.createElement("li");
  kli3.innerText =
    "SUGAR Contour De Force Eyes And Face Palette 02 - Pink Pro stars a swathe of vibrant pinks, lilac, copper and rose gold hues you're bound to adore";
  let kli4 = document.createElement("li");
  kli4.innerText =
    "This palette comes with a flattering deep tan matte bronzer, a salmon pink blush with hints of shimmer and an unmatched, glow-giving true gold highlighter in a ravishing shimmer finish";
  let kli5 = document.createElement("li");
  kli5.innerText =
    "The shades included in this palette are intensely rich in pigment, effortlessly blendable and deliver an intense colour payoff";
  let kli6 = document.createElement("li");
  kli6.innerText =
    "Long-lasting formula that stays without creasing or smudging";
  let kli7 = document.createElement("li");
  kli7.innerText =
    "These makeup palettes are cruelty-free, vegan and the shades are non-comedogenic";
  let netw = document.createElement("h4");
  netw.innerHTML = "<b>Net Weight: <b>";
  let netwp = document.createElement("p");
  netwp.innerHTML = netw.innerHTML + "20.3g/0.72 Oz.";
  let mrtp = document.createElement("h4");
  mrtp.innerHTML = "<b>Maximum Retail Price :</b>";
  let rtp = document.createElement("p");
  rtp.innerHTML = mrtp.innerHTML + ` Rs.1099/- (incl. of taxes)`;
  let cnt = document.createElement("h4");
  cnt.innerHTML = "<b>Country Of Origin :</b>";
  let origin = document.createElement("p");
  origin.innerHTML = cnt.innerHTML + `India`;
  let ca = document.createElement("p");
  ca.innerHTML =
    "<b>Company Address :</b>" +
    "<span>Vellvette Lifestyle Pvt. Ltd., B-1004, Palatial Heights, Andheri (E), Mumbai 400072</span>";

  content.append(p1, p2, shades, warm, ul1, ul2, ul3, netwp, rtp, origin, ca);
  // console.log(content)
  document.getElementById("description").disabled = true;
  document.getElementById("ingridients").disabled = false;
  document.getElementById("use").disabled = false;
  document.getElementById("ques").disabled = false;
}

function ingridients() {
  content.innerHTML = null;
  let warm = document.createElement("p");
  warm.innerHTML =
    "<b>01 - Warm Win: </b>" +
    "<span>Talc, Synthetical  Mica, Sericite Powder, Magnesium Stearate And Magnesium Palmitate, Polymethyl Methacrylate, Silica, Talc And Triethoxy Caprylylsilane, Mica Powder, Silica, Polymethyl Methacrylate, Polyethylene, Phenoxyethanol, Dimethicone, Bis-Diglyceryl Polyacyladipate-2, 2-Ethylhexyl Palmitate, Red Iron Oxide(Ci77491), Yellow Iron Oxide(CI77492), Black Iron Oxide(CI77499), Yellow 5 Lake(CI 19140), Fd&C Red No 40 Aluminum Lake(CI 16035:1), Red 7 Lake(CI  15850), Titanium Dioxide, Mica(And)CI77891, Mica(And)CI77891(And) CI77091, Mica(And)CI 77891(And)CI 77861, Mica(And)CI77891(And) CI77861, Mica(And)Ci77091(And) CI 77891(And) CI 77861, Mica(And)77019 And CI77491, Mica, Titanium Dioxide, Mica(And)CI77891(And)CI77491, Mica(And)CI77891(And) CI77091, Mica(And)CI77891(And)CI77491(And)CI77511, Mica(And)CI 77491(And)CI 77019, Mica(And)CI 77491(And)CI 77019, Mica(And)CI77019(And) CI 77891(And) CI 77266</span>";
  let pink = document.createElement("p");
  pink.innerHTML =
    "<b>02 - Pink Pro: </b>" +
    "<span> Talc, Synthetical  Mica, Sericite Powder, Magnesium Stearate And Magnesium Palmitate, Polymethyl Methacrylate, Silica, Phenoxyethanol, Dimethicone, Red Iron Oxide(Ci77491), Yellow Iron Oxide(Ci77492), Black Iron Oxide(CI77499), Yellow 5 Lake(CI 19140), Fd&C Red No 40 Aluminum Lake (CI16035:1), D&C Red No.6 Sodium Salt (CI 15850), Red 7 Lake(CI  15850), Red 27 Lake (CI 45410), Ultramarine Blue(CI 77007), Titanium Dioxide, Mica (And) CI 77891, Mica (And) Ci77891 (And) CI77091, Mica(And) CI 77891 (And) CI 77861, Mica(And)CI77891(And) CI77861, Mica(And) 77019 And CI77491, Mica, Titanium Dioxide, Mica(And)CI77891(And) CI77491, Mica (And) CI77891(And) CI77091 Mica(And)CI77891(And)CI77499, Mica (And) CI 77491, Mica (And) CI 77491(And) CI 77019, Mica (And) CI77891(And) CI77491(And) 77019, Mica(And) CI 77019 (And) CI 77891(And) CI 77266, Mica(And)CI 77491(And) CI 77019, Mica(And)CI 77891(And) CI 16035(And)</span>";
  content.append(warm, pink);
  document.getElementById("description").disabled = false;
  document.getElementById("ingridients").disabled = true;
  document.getElementById("use").disabled = false;
  document.getElementById("ques").disabled = false;
}

function use() {
  content.innerHTML = null;
  let ul1 = document.createElement("ul");
  let li1 = document.createElement("li");
  li1.innerText =
    "Gently buff bronzer onto cheekbones, chin, nose and forehead";
  let li2 = document.createElement("li");
  li2.innerText = "Sweep blush on the apple of your cheeks for an endless glow";
  let li3 = document.createElement("li");
  li3.innerText =
    "Apply highlighter to high points of the face, including cheekbones, nose, inner corners of eyes and cupid’s bow";
  ul1.append(li1, li2, li3);
  let most = document.createElement("p");
  most.innerHTML = "<b>Matte Eyeshadow Shades: </b>";
  let text1 = document.createElement("p");
  text1.innerText =
    "- Apply with fluffy, dome-shaped eyeshadow brushes to effortlessly blend colours into your crease to contour your eyes. Use a dense brush for added depth and definition";
  let sh = document.createElement("p");
  sh.innerHTML = "<b>Shimmer and high-shine foil shades:</b>";
  let text2 = document.createElement("p");
  text2.innerText = "- Apply with dense eyeshadow brushes for intense impact";
  content.append(ul1, most, text1, sh, text2);

  document.getElementById("description").disabled = false;
  document.getElementById("ingridients").disabled = false;
  document.getElementById("use").disabled = true;
  document.getElementById("ques").disabled = false;
}

function ques() {
  content.innerHTML = null;
  let q1 = document.createElement("p");
  q1.innerHTML = "<b>Q. Is the blush and bronzer matte or shimmer?</b>";
  let a1 = document.createElement("p");
  a1.innerHTML =
    "<b>A.</b>" +
    "<span>The Contour De Force Eyes And Face Palette 01 - Warm Win has a cool brown matte bronzer and a light peach matte blush. On the other hand, the 02 - Pink Pro comes with a deep tan matte bronzer and a salmon pink blush with a subtle shimmer.</span>";
  let q2 = document.createElement("p");
  let a2 = document.createElement("p");
  q2.innerHTML = "<b>Q. Will these makeup palettes suit dusky skin?</b>";
  a2.innerHTML =
    "<b>A.</b>" +
    "<span>Both the variants of the new palette work brilliant for all skin tones. The versatile mix of nude and bold shades will definitely take your makeup to the next level. 01 - Warm Win works well for light-to-medium skin tones while 02 - Pink Pro for medium-to-deep skin tones.</span>";
  let q3 = document.createElement("p");
  q3.innerHTML = "<b>Q. Is there a brush included in the palette?</b>";
  let a3 = document.createElement("p");
  a3.innerHTML =
    "<b>A.</b>" +
    "<span> Yes. You get 2 mini brushes. One to play with the highly pigmented eyeshadow colours and the other to apply blush and bronzer. This travel-friendly makeup palette also has a in-built mirror for makeup application on-the-go!</span>";
  content.append(q1, a1, q2, a2, q3, a3);

  document.getElementById("description").disabled = false;
  document.getElementById("ingridients").disabled = false;
  document.getElementById("use").disabled = false;
  document.getElementById("ques").disabled = true;
}

window.addEventListener("load", function () {
  description();
});

let imgList = [
  {
    img: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-lip-duo-14-teak-mystique-warm-brown-12788426309715.jpg?v=1619108536",
    name: "     SMUDGE ME NOT LIP DUO - 14 ...",
    price: "1099",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0906/2558/products/01_59809bd6-49ef-4c6b-b262-47002bedc963.jpg?v=1639755559",
    name: "BLEND THE RUKES EYESHADOW PALLETE",
    price: "1199",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861",
    name: "METTLE PRIMMING BALM",
    price: "1099",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-wonder-woman-creamy-matte-lipstick-04-wild-wonder-lightest-coral-peach-28132892377171.jpg?v=1619154902",
    name: "WONDER WOMAN CREAMY MATTE LIPSTICK ....",
    price: "299",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-matte-as-hell-crayon-minis-lipstick-01-scarlett-o-hara-28219914354771_39239823-2ed8-4b8d-b0db-48c857ae0e3f.jpg?v=1642070562",
    name: "MATTE AS HELL CRAYON LIPSTICK ...",
    price: "199.",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_1bcaf76b-f1fe-414f-96ef-ea98596505fb.jpg?v=1633967123",
    name: "EYE LOVE JELLY EYESHADOW -05 ...",
    price: "299",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_750ad63f-62a7-48b2-b64c-56f04ebff64e.jpg?v=1634053456",
    name: "EYE LOVE JELLY EYESHADOW -07 ...",
    price: "299",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0906/2558/products/2-illuminating-pink.jpg?v=1655964128",
    name: "BLING LEADER MINI ILLUMINATING ...",
    price: "199.",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0906/2558/products/Vineeta_s-Favourite-Makeup-kit---WBG-images.jpg?v=1657555460",
    name: "VINEETA'S FAVOURITE MAKEUP KIT",
    price: "2999",
  },
];
let i = 0,
  j = 1,
  k = 2;
imgViewer();
function imgViewer() {
  let img_container = document.getElementById("img_container");
  img_container.innerHTML = null;
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let img1 = document.createElement("img");
  let img2 = document.createElement("img");
  let img3 = document.createElement("img");
  let name1 = document.createElement("h4");
  let name2 = document.createElement("h4");
  let name3 = document.createElement("h4");
  let price1 = document.createElement("p");
  let price2 = document.createElement("p");
  let price3 = document.createElement("p");
  let div4 = document.createElement("div");
  let div5 = document.createElement("div");

  img1.src = imgList[i].img;
  name1.innerHTML = "<b>" + imgList[i].name + "</b>";
  price1.innerHTML = "Rs. " + imgList[i].price;

  img2.src = imgList[j].img;
  name2.innerHTML = "<b>" + imgList[j].name + "</b>";
  price2.innerHTML = "Rs. " + imgList[j].price;

  img3.src = imgList[k].img;
  name3.innerHTML = "<b>" + imgList[k].name + "</b>";
  price3.innerHTML = "Rs. " + imgList[k].price;

  div1.append(img1, name1, price1);
  div2.append(img2, name2, price2);
  div3.append(img3, name3, price3);
  let btnLeft = document.createElement("button");
  btnLeft.innerText = "<";
  btnLeft.addEventListener("click", function () {
    leftimg();
  });

  let btnRight = document.createElement("button");
  btnRight.innerText = ">";
  btnRight.addEventListener("click", function () {
    rightimg();
  });

  div4.append(btnLeft);
  div5.append(btnRight);
  img_container.append(div4, div1, div2, div3, div5);
}
// console.log(imgList[i].img);

function leftimg() {
  i--;
  j--;
  k--;
  if (i == -1) {
    i = imgList.length - 1;
  }
  if (j == -1) {
    j = imgList.length - 1;
  }
  if (k == -1) {
    k = imgList.length - 1;
  }
  imgViewer();
  console.log(i, j, k);
}

function rightimg() {
  i++;
  j++;
  k++;
  if (i == imgList.length) {
    i = 0;
  }
  if (j == imgList.length) {
    j = 0;
  }
  if (k == imgList.length - 1) {
    k = 0;
  }
  imgViewer();
  console.log(i, j, k);
}

function cart_call() {
  alert("Product successfully added!");
  window.location.href = "./cart.html";
}
