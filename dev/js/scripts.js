import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { EaselPlugin } from "gsap/EaselPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin, EaselPlugin, ExpoScaleEase, RoughEase, SlowMo, MotionPathPlugin, DrawSVGPlugin);

const mainTL = gsap.timeline();

mainTL.set("#preloader",{transformOrigin:"50% 50%", scale:3});
mainTL.set(".stars",{transformOrigin:"50% 50%", y:-1100,alpha:1});
mainTL.set(".logoParts",{transformOrigin:"50% 50%",alpha:1,y:-1050});
// mainTL.set(".planetStars",{transformOrigin:"50% 50%",x:0,alpha:1,y:0});
mainTL.set("#comet",{scale:1,x:-300,y:-950});
mainTL.set(".orbit-word",{scale:.5,transformOrigin:"50% 50%",x:0,alpha:1,y:-1110});
mainTL.set(".finalLogo",{transformOrigin:"50% 50%",y:0,alpha:1});
mainTL.set(".planetStars",{scale:1,transformOrigin:"50% 50%",alpha:1});
mainTL.set(".amongus",{alpha:0});
    // mainTL.set(".orbit-word #Vector_18",{alpha:0});
    // mainTL.set(".orbit-word #Vector_20",{alpha:0});
    // mainTL.set(".orbit-word #Vector_17",{alpha:0});
    // mainTL.set(".orbit-word #Vector_19",{alpha:0});
    // mainTL.set(".orbit-word #Vector_21",{alpha:0});


// mainTL.set(".stars",{transformOrigin:"50% 50%", scale:3,alpha:1,y:-1000});
// mainTL.to(".stars",{y:0,duration:5,stagger:-.2,ease:"power4.inOut"});

function intro(){
    const tl=gsap.timeline();
    tl.to(".stars",{y:550,duration:5,stagger:-.5,ease:"power4.inOut"},"-=3.5");
    
    // tl.to(".planetStars",{x:0,y:-10,duration:2,ease:"power1.out"},"-=3");
    return tl;
}

function planetBuilding(){
    const tl=gsap.timeline();
    tl.set(".logoParts",{autoAlpha:1,scale:.5});
    tl.from(".logoParts #Vector_14",{drawSVG:"100% 100%", ease:"power4.out", duration:2});
    tl.from(".logoParts #Vector_16",{drawSVG:"100% 100%", duration:.5},"-=1.3");
    tl.from(".logoParts #Vector_15",{drawSVG:"100% 100%", duration:.5}, "-=.8");
    tl.to(".orbit-word",{autoAlpha:1, duration:1, y:-1120},"-=.5");
    // tl.to(".orbit-word #Vector_18",{duration:.1,y:60,autoAlpha:1});
    // tl.to(".orbit-word #Vector_20",{duration:.1,y:60,autoAlpha:1});
    // tl.to(".orbit-word #Vector_17",{duration:.1,y:60,autoAlpha:1});
    // tl.to(".orbit-word #Vector_19",{duration:.1,y:60,autoAlpha:1});
    // tl.to(".orbit-word #Vector_21",{duration:.1,y:60,autoAlpha:1});
    

    
        
    // tl.set(".logoParts",{alpha:1});
    // tl.from(".logoParts #Vector_14",{drawSVG:"100% 100%", ease:"power4.out", duration:3});
    // tl.from(".logoParts #Vector_16",{drawSVG:"100% 100%", duration:.5},"-=1.3");
    // tl.from(".logoParts #Vector_15",{drawSVG:"100% 100%", duration:.5}, "-=.8");
    // tl.to(".orbit-word",{alpha:1, duration:1},"-=.5");
    return tl;
}


function logoTwinkle(){
    const tl=gsap.timeline({repeat:-1, yoyo:true});
    tl.fromTo(".logo-stars",{duration:.1, alpha:1},{stagger:.3, alpha:.3});
    return tl;
}

function twinkle(){
    const tl=gsap.timeline({repeat:-1, yoyo:true});
    // tl.fromTo(".stars littleStars",{duration:.1, alpha:.3},{stagger:.3, alpha:1});
    tl.fromTo(".stars-1",{duration:.3, alpha:1},{stagger:0.1, alpha:.3});
    tl.fromTo(".stars-2",{duration:.3, alpha:1},{stagger:0.1, alpha:.3},"-=2");
    tl.fromTo(".stars-3",{duration:.3, alpha:1},{stagger:0.1, alpha:.3},"-=2");
    return tl;
}

function endStars(){
    const tl=gsap.timeline();
    tl.set(".amongus",{x:-4});
    tl.to(".amongus",{duration:1,y:70,autoAlpha:1,stagger:.2,ease:"elastic.out(1, 0.5)"});
    tl.to(".logo-stars",{duration:.5, alpha:1});
    return tl;
}

logoTwinkle();
twinkle();

gsap.timeline({onStart:mainTL.to("#comet",{x:300,y:-1350,ease:"power3.inOut",duration:3,autoAlpha:.5})});

mainTL.add(intro(),"-=2")
.add(planetBuilding(),"-=1.5")
.add(endStars(),"-=1");




// mainTL.set("#preloader",{scale:1.5, x:0});
// mainTL.set(".stars",{scale:2,x:-150, y:-500});
// mainTL.set("#comet",{scale:2,x:-600, y:-1500});
// mainTL.set(".planetStars",{scale:1.2,x:-25, y:0});



// // mainTL.set("#preloader",{scale:1, x:0, y:-1700});
// // mainTL.set(".stars",{scale:2,x:-150, y:-1400});
// // mainTL.set("#comet",{scale:2,x:-600, y:200});
// // mainTL.set(".planetStars",{scale:1.2,x:-25, y:-800});


// // mainTL.set(".logo-stars",{alpha:1});

// mainTL.set(".stars-1",{alpha:1});

// // twinkle();

// // function twinkle(){
// //     const tl=gsap.timeline();
// //     tl.fromTo(".stars-1",{duration:0.01, alpha:1},{stagger:0.1, alpha:.3});
    
// // // tl.fromTo(".logo-stars",{duration:0.1, alpha:1},{stagger:0.3, alpha:.3});
// // }


// gsap.timeline({onStart:mainTL.to("#comet",{x:700, y:-600, ease:"power3.in",duration:4,autoAlpha:.5})});
// // gsap.timeline({onStart:mainTL.to("#comet",{x:700, y:-600, ease:"power3.in",duration:4,autoAlpha:.5})});


// function intro(){
// const tl=gsap.timeline();


// // tl.set(".finalLogo",{autoAlpha:1});

// // tl.to(".stars",{scale:1.99, duration:.5, yoyo:true, repeat:5});
// // tl.to("#comet",{x:700, y:-600, ease:"power4.in",duration:4,autoAlpha:.5});


// // tl.to("#comet",{y:600,duration:2},"sametime");
// tl.to(".stars",{y:800,duration:5,stagger:-.4,ease:"power4.inOut"},"-=3.5");
// // tl.to(".planetStars",{x:-25,y:-42,duration:2,ease:"power1.out"},"-=3");

// return tl;
// }

// function planetBuilding(){
//     const tl=gsap.timeline();
    
//     tl.set(".logoParts",{autoAlpha:1});
//     tl.from(".logoParts #Vector_14",{drawSVG:"100% 100%", ease:"power4.out", duration:3});
//     tl.from(".logoParts #Vector_16",{drawSVG:"100% 100%", duration:.5},"-=1.3");
//     tl.from(".logoParts #Vector_15",{drawSVG:"100% 100%", duration:.5}, "-=.8");
//     tl.to(".orbit-word",{autoAlpha:1, duration:1},"-=.5");
//     return tl;
// }

// function logoTwinkle(){
//     const tl=gsap.timeline({repeat:-1, yoyo:true});
//     tl.fromTo(".logo-stars",{duration:.1, alpha:.3},{stagger:.3, alpha:1});
// }

// function twinkle(){
//     const tl=gsap.timeline({repeat:-1, yoyo:true});
//     return tl;
//     // tl.fromTo(".stars-1",{duration:.5, alpha:.3},{stagger:0.3, alpha:1});
// }







// logoTwinkle();
// twinkle();

// mainTL.add(intro(),"-=2")
// .add(planetBuilding(),"-=1");


