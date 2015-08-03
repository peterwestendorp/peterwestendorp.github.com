---
layout: blogpost
title: F*rk jQuery! Introducing ukQuery...
---

Since a few weeks I have broadened my horizon by learning more about jQuery and its famous jQuery object. As a developer who used to work with Dojo a lot, I found a few things that were a bit confusing to me.

## Making jQuery better - ukQuery
To make it easier to work with jQuery, I decided to fork jQuery and create <a href="https://github.com/peterwestendorp/jquery" target="_blank">my own custom version</a>. I started with an important spelling correction; colour is now spelled in UK English. So every styling on the CSS 'color' property via ukQuery can be done with the 'colour' property as well.

<pre class="sh_javascript">
  $("a").css("colour", "red");
</pre>

To make the UK jQuery experience complete, you can only use the 'colour' property after calling the excuseMe() function. So remember your manners:

<pre class="sh_javascript">
  $("a").excuseMe().css("colour", "red");
</pre>

Having made these changes, the $ symbol looks really silly and because £ is an invalid character in Javascript, I replaced the $ character by GBP. The result is a really great tool, which gives jQuery a more natural feeling for UK based developers.

So now I’ve had a rant, I’d like to share some other thoughts on jQuery...

## jQuery object versus normal nodelist
Querying the DOM with jQuery returns a jQuery object with a nodelist in it. If you want for example to change the CSS of all the nodes, you can simply do this:

<pre class="sh_javascript">
  $(".foo").css("display", "none");
</pre>

I see the advantages of jQuery's approach here; first of all you don't have do deal with nodelists or array's if you don't understand them. Besides that, it's shorter and more readable. At least in some cases...

What if you want to add some extra text to the innerHTML of a bunch of nodes and then change some styles?

You will end up with something like this:

<pre class="sh_javascript">
  var foos = $(".foo");
  $.each(foos, function(index, myFoo){
    myFoo.innerHTML += " world!";
    $(myFoo).css("color", "red");
  });
</pre>

What confuses me here is that you have to extract the node from the jQuery object so that you can use innerHTML:

<pre class="sh_javascript">
  $.each(foos, function(index, myFoo){
    myFoo.innerHTML += " world!";
</pre>

After that you have to put it back into a jQuery object again, just to be able to use methods, such as .css(), on that node:

<pre class="sh_javascript">
  $(myFoo).css("color", "red");
</pre>

To be fair, I could also just call jQuery's .append() in my jQuery object (although I thought "append" in Javascript had something to do with inserting nodes into the DOM). My point is this; Why is jQuery forcing me to either always use all of its magic, or fool around with extracting nodes from objects? I think that if you start extracting nodes from a jQuery object and wrapping it back in a new one again, the readability of your code decreases. (James Padolsey wrote an <a href="http://james.padolsey.com/javascript/76-bytes-for-faster-jquery">interesting article</a>, as well as a plugin, related to this topic). So why not just $.css(myFoo) instead of $(myFoo).css(). Why all the bling?

Dojo and MooTools (and probably a lot more frameworks) for example, don't require you to wrap a node in some magic object, but still enable you to chain your actions.

## What is this?
In Javascript the this keyword refers to its owner <a href="http://www.quirksmode.org/js/this.html" target="_blank">PPK's Quirksmode</a> provides a lot of useful information about this). So if you write a simple function:

<pre class="sh_javascript">
  function foo(){
   console.log(this); //will output window
  }
</pre>

This will output the window object in the console. Because that function is "owned" by the window object. If we use the same function and place it in a property of the "foo" object, the this keyword will refer to the "foo" object:

<pre class="sh_javascript">
  var foo = {};
  foo.myMethod = function(){
   console.log(this); //will output foo
  };
  foo.myMethod();
</pre>

In Javascript there is one exception to this behaviour; in the case of an eventlistener, this will refer to to node where the event was fired from:

<pre class="sh_javascript">
  bar.addEventListener('click',function(){
   console.log(this); //will output bar
  },false);
</pre>

That's pretty much how the this keyword behaves in Javascript. It always refers to it's owner object, except in the case of an eventlistener...

jQuery however makes it a bit more complicated.

<pre class="sh_javascript">
  var foo = ["apple", "orange", "banana"];
  $.each(foo, function(){
   console.log(this); //will output apple, then orange, and
   //finally banana
  });
</pre>

In a jQuery.each loop, this refers to the current element. So that's another exception in the behaviour of this. Yet, another confusing aspect. I thought a Javascript framework was meant to make things more consistent, to normalize them! For me, it is making this worse.

## It's not only complaining
There are obviously a lot of good parts of jQuery. All the magic from the jQuery object makes it easy to work with for beginners. And if you're a more advanced user, you can definitely also use jQuery for the more nifty scripts. Besides that, jQuery has a huge active community that have together created a lot of great plugins and documentation, which can save you a lot of time...

Have you too wrestled with jQuery? Let me know your thoughts! If you would like to know anymore about the aspects of jQuery I have discussed here; there is also a nice <a href="http://vimeo.com/8247540" target="_blank">episode of the yayQuery podcast</a> on this topic.
