
menud1.addEventListener("change", cli1)

function cli1(event) {
    console.log(event.target.value)
    if (event.target.value === 's1') {
        pgacc.style.display = "none";
        se1pg1.style.display = "flex";
        se2pg.style.display = "none";
    }  else if (event.target.value === 's2') {
        pgacc.style.display = "none";
        se1pg1.style.display = "none";
        se2pg.style.display = "flex";
    } else {
        pgacc.style.display = "flex";
        se1pg1.style.display = "none";
        se2pg.style.display = "none";
    }
}

 
 function image() {
    setTimeout(() => {
        i1.style.display = "none";
        i2.style.display = "block";
    }, 4000)
    
    setTimeout(() => {
        i2.style.display = "none";
        i3.style.display = "block";
    }, 8000)
    
    setTimeout(() => {
        i3.style.display = "none";
        i1.style.display = "block";
    }, 12000)
    }
    image ();
    const myInterval = setInterval(image, 12000)

prepast.addEventListener("click", pastmoins);
retpast.addEventListener("click", pastret);
suipast.addEventListener("click", pastplus);

function pastmoins () {
    xp -= 1; 
    xp = ( xp <= 0 )? 1 : xp;
    console.log("xp =" + xp);
    refresh();
}

function pastplus () {
    xp += 1;
    xp = (xp > 5)? 5 : xp;
    console.log("xp =" + xp);
    refresh ();
}

function pastret () {
    xp = 1;
    console.log("xp =" + xp);
    refresh ();
}

function refresh () {
    if (xp === 1) {
        pp1.style.display = "block"; 
        pp2.style.display = "none";
        pp3.style.display = "none";
        pp4.style.display = "none";
        pp5.style.display = "none";
    } if (xp === 2 ) {
        pp1.style.display = "none";
        pp2.style.display = "block";
        pp3.style.display = "none";
    } if (xp === 3 ) {
        pp2.style.display = "none";
        pp3.style.display = "block";
        pp4.style.display = "none";
    } if (xp === 4 ) {
        pp3.style.display = "none";
        pp4.style.display = "block";
        pp5.style.display = "none";
    } if (xp === 5 ) {
        pp4.style.display = "none";
        pp5.style.display = "block";
    } if (xs === 1) {
        ps1.style.display = "block"; 
        ps2.style.display = "none";
        ps3.style.display = "none";
        ps4.style.display = "none";
        ps5.style.display = "none";
    } if (xs === 2 ) {
        ps1.style.display = "none";
        ps2.style.display = "block";
        ps3.style.display = "none";
    } if (xs === 3 ) {
        ps2.style.display = "none";
        ps3.style.display = "block";
        ps4.style.display = "none";
    } if (xs === 4 ) {
        ps3.style.display = "none";
        ps4.style.display = "block";
        ps5.style.display = "none";
    } if (xs === 5 ) {
        ps4.style.display = "none";
        ps5.style.display = "block";
    }
}

prepast2.addEventListener("click", pastmoins2);
retpast2.addEventListener("click", pastret2);
suipast2.addEventListener("click", pastplus2);

function pastmoins2 () {
    xs -= 1; 
    xs = ( xs <= 0 )? 1 : xs;
    console.log("xs =" + xs);
    refresh();
}

function pastplus2 () {
    xs += 1;
    xs = (xs > 5)? 5 : xs;
    console.log("xs =" + xs);
    refresh ();
}

function pastret2 () {
    xs = 1;
    console.log("xs =" + xs);
    refresh ();
}

