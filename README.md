# odin-etch-a-sketch
Etch-A-Sketch Project for The Odin Project
(https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/etch-a-sketch-project)


I did look at some of the solutions at the bottom for inspiration, but *not* their code.


- White grid made of JS generated divs to draw on with hover effect: Check

I was going to have some black padding around it to make it look sort of like an ipad, but that
broke in all sorts of horrible ways on resizing the browser and I decided it wasn't worth it.


- Button to reset grid as well as adjust pixel size: Check

I tend to do exactly what the instructions say, but the slider I saw in other solutions is
definitely a better way to do pixel size than having the clear button bring up a prompt, so
used that.
The canvas was doing a bit of twitching and minor resizing when using the pixel slider which
it isn't supposed to do, so added in a check to only accept numbers the canvas size is evenly
divisible by.


- Random RGB and transparent black options: Check

I thought I was cheating by converting 9 transparency levels of black on white into full
opacity grey tones to avoid the body background colour shining through, but that might actually
be the only way to do it. Either way, it works, and no one said anything about offering
transparency for other colours.


- Drew a beautiful coffee cup and tablet pen in MS Paint for atmosphere. Or it might have been
a way to pretend to be doing something productive when I didn't feel like tinkering with the
code. 


- Tried to make this mobile friendly insofar that I added some responsive design elements to
keep the page from being completely unusable on a small screen, but on mobile you'd have to
draw on the canvas by tapping each individual pixel. Making swiping work looks like a
Pandora's box I'd like to leave shut for now.


- The coffee cup will disappear below a certain screen width, which is absolutely because
it is unnecessary when screen real estate is limited and absolutely not because I couldn't
get the footer to not sit above it. 

