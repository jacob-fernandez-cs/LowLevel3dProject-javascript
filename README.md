# LowLevelProject-3d

https://pages.github.iu.edu/fernajar/LowLevelProject-3d/LowLevel.html

github hosted website for assignment

init()
Here I set all my variables needed, I have created 2 geometry’s one is a cube the other is a sphere, I also have created 2 materials one that is not manipulated and another material that will be controlled to change colors
Added an event listener for resizing the page correctly and an event listener for clicking and keyboard key pressing.
After the creation of the shapes I create a point lint and then add the light and all 3 shapes to the scene.
Next I create the necessary variables for controlling the changing of colors on my cubeS shape.

onMouseClick()
this function controls what happens when you click onto a shape. I have included the tweenmax library in this function. It allows for simple control of the shapes timing in order to preform animations on the shape.
When an object is clicked, it is scaled then its position is set along the x axis and it is rotated along the y axis

onWASDpress()
this function allows for the user to control the cube shape using WASD allows for you to move it around the screen space resets it position

update()
here is where everything is rendered, a variable d is created in order to get delta time, d is used to rotate the cube2 and the colorMixer is updated in order to change colors
