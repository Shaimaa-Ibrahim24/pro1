//to add random videos
but1.addEventListener("click", (eo) => {
    const arrayVid = [`<iframe class="vid" id="vid2"  src="https://www.youtube.com/embed/Cp3klW1IDSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    `<iframe class="vid" id="vid3"  src="https://www.youtube.com/embed/XMwey5J6VEs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    `<iframe class="vid" id="vid4"  src="https://www.youtube.com/embed/rCVuUBHWEj0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
 ]
    const rand = Math.round(Math.random()* (arrayVid.length-1));
    vids.innerHTML = arrayVid[rand];
})
//to add quotes
let ind = 0;
but2.addEventListener("click", (eo) => {
    const quotArr = [`<blockquote id="qu1" lang="ar" dir="rtl">الدنيا وملذّاتها مرحلة مؤقّته والدّائم هو الله فلا يعقل أن نهتم بتعرف ما هو مؤقت ونهمل الدائم.</blockquote>`, `<blockquote id="qu1" lang="ar" dir="rtl">القلم هو الأداة التي تعكس شخصيّتك على مرآة الورق وهو الصديق الدّائم،هو هبة من الله هو سلاح ومنارة.</blockquote>`, `<blockquote id="qu1" lang="ar" dir="rtl">فرق شاسع بين العلم والمعرفة فالعلم هو فهم الحقائق أمّا المعرفة هى إدراك الحقائق.</blockquote>`, `<blockquote id="qu1" lang="ar" dir="rtl">إن الإتجاه الذي يبدأ مع التعلم سوف يكـــون من شأنه أن يحدد حياة المرء في المستقبل، (أفلاطون).</blockquote>`]

    qote.innerHTML = quotArr[ind];
    ind++;
    if(ind > quotArr.length -1){
        ind = 0;
    }
})

          
