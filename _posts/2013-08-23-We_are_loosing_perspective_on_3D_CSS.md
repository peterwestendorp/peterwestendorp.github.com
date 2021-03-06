---
layout: blogpost
title: We're losing perspective on 3D CSS
---

Over the last few months we've seen quite a few interesting demos in 3D CSS. Some offer <a href="http://codepen.io/bennettfeely/pen/ErFGv" target="_blank">really nice UI interactions</a>, others are built just to <strike>show us the capabilities of modern browsers</strike> <a href="http://www.keithclark.co.uk/labs/css3-fps-new/" target="_blank">blow our minds</a>.

Since last week another example could be added to this list; <a href="http://tridiv.com/" target="_blank">Tridiv</a>. Julian Garnier built this 3D CSS editor that has tons of features, and it's looking really really good!

<img src="http://tridiv.com/img/screens/tridiv-intro.jpg" alt="Tridiv screenshot" width="648">

My initial reaction when I first saw Tridiv was one of pure amazement. But I also started to wonder; with these extreme examples, are we taking it too far? How far should we push this 3D CSS thing?

Christian Heilmann said about Tridiv on <a href="https://twitter.com/codepo8/status/370255464325320704" target="_blank">Twitter</a>: '... webkit only, deep in the "can do, but should you" camp'. I don't think it's the browser support that makes it a "can do, but should you" though. We have to remember that there are a lot of constraints when it comes to creating 3D objects with CSS. The main one being; you can only work with flat shapes. Spherical objects are impossible to create in CSS. Ok, you can use CSS custom filters, but even then, is the DOM really the foundation you want to build your 3D world on?

&lt;rant&gt;3D CSS should be used for simple UI interactions, anything beyond flat shapes or box shapes should not be done with CSS. It's simply not the right tool for the job. It's a hack! We can try to keep pushing this further and further, but it's a dead end road. DOM elements are not designed to live on a real 3D stage. The fact that dynamic lighting is incredibly expensive proves that.&lt;/rant&gt;

I'd like to echo what Guillaume Lecollinet wrote in his <a href="http://html5hub.com/using-webgl-to-add-3d-effects-to-your-website" target="_blank">blogpost</a>  about using WebGL to add effects to your website:

<p><blockquote>"Don't get me wrong, CSS 3D transforms are a wonderful tool which I definitely recommend using for basic UI effects. But as soon as you want to work with complex 3D scenes, I'd recommend going for WebGL, which gives you models, textures, lighting/shadows, and shaders to work with."</blockquote></p>

With a <a href="http://glecollinet.github.io/webgl-demo/" target="_blank">demo</a> Guillaume showed how you can integrate WebGL in the CSS layout of your website. Another great example of this is <a href="http://acko.net/blog/on-webgl" target="_blank">Steven Witten's new website</a>. Steven is using a combination of WebGL for the complex 3D shapes, and 3D CSS to place the other DOM elements in the same perspective as the 3D scene from his 'WebGL component'.

I really think this is the way forward. We should stop creating 3D shapes in CSS, and instead put our effort in learning the real deal with tools like Three.js. And use 3D CSS only where appropriate...
