# GardenDo - WebXR Version | [Try it out!](https://gardendo-webxr.web.app) 

[![Contributor Covenant](https://gardendo-webxr.web.app/)](code_of_conduct.md)

A plant watering exercise that is designed to address and measure the various variables of attention

### Description

That's this file, where you can tell people what your cool website does and how you built it.

### Story

Reem/Hussien/Liza/Rich and the player will be watering plants today! , the player must water each flower and keep watering it until it fully grows and blooms! Each flower will look different, so watering each one will unleash a new character.

## Levels



### Level one:

- The scene intro: The game starts with the player positioned in the center of the circled fence (play area).

- The NPC is standing to the right of the flower pots in relation to the player.

- Once the game starts, the NPC raises their hand and waves. (waving hand animation).

- The NPC welcomes the player and tells him to water the flower.

- A footstep image appears in front of the first pot.

- The player should go there and stand in front of the NPC and the first flower pot. The three other pots should now be on the player’s left to the left of the first flower.

- The player should look at the pot + place the bucket over the pot’s area to water the first flower.

- As the player is placing the bucket in the right area and looking at the flower, water should pour from the bucket to the flower pot.

- The flower growth animation begins.

- If the player stops looking at the flower or moves the bucket midway, the flower reverses its growth as described earlier.

- Once the flower is done being watered .

- The next flower to the left of the first flower is unlocked.

- This sequence is repeated for the remaining flowers. -When finishing all the flower NPC thanks the player for helping.

### Level two (distractor included):

- In the second level, distractions should appear around the garden to try to distract the player from sustaining their attention on the needed objects.

- Distractions appear in the form of butterflies.

### Level three (distractor and interaction are included):

- In the third level, the player needs to react to a certain stimulus while focusing on the particular object to perform a task.

- A bird should appear flying close to the flowers while the player is focusing on the flowers, and when it is close to a flower the player should react by touching the bird to make the bird go away instead of attacking the flowers.

- To know more about the design of the gamified thepautic VR application, check our [GDD](https://drive.google.com/file/d/1b5X8AImBezQqSnH__FERpBGz3Q5AE6W6/view?usp=sharing) (Game Design Document)
### Statistics:

- In each session, we need collect data to measure the progress of the player. More information about the collected information could be found [here](https://drive.google.com/file/d/1PaKcRVylyNUeju63PrJ3DH25jhlL1JCE/view?usp=sharing).

### Technologies Used

- [A-Frame](https://aframe.io/)
   - [Animation Mixer](https://www.8thwall.com/8thwall/animation-mixer-aframe) 
   - [AABB Colider](https://github.com/supermedium/superframe/tree/master/components/aabb-collider/)
   - [SPE Particles](https://github.com/harlyq/aframe-spe-particles-component) 
   - [Super hands](https://github.com/wmurphyrd/aframe-super-hands-component) 
   - [Event set](https://www.npmjs.com/package/aframe-event-set-component)

- HTML, CSS, JavaScript

# Installation Guide  
   
#### 1 | Install and run the project locally using NPM
---
> node v15.5.0
> npm v7.3.0

 1. Clone the repository `git clone https://github.com/vrapeutic/Archeeko-WebXR.git`
 2. Go to the repo's directory `cd Archeeko-WebXR`
 3. Run `npm install` to install the required dependecies
 4. Run `npm run dev` command to start the WebXR app in your local envirotnment
 5. Go to the localhost URL specified in the terminal
 6. Congrats! You've got your local development environment ready!

#### 2 | Install and run the project locally using Docker
---
> `docker v20.10.1`

- Yet to be implemented.

#### 3 | Run the project on Glitch platform
---
1. Go to [Glitch](https://glitch.com/) platform.

2. Create an account if you don't already have one.

3. On your dashboard, then click __New project__ , then choose the __Import from GitHub__ option.

4. Paste the repo's full [url](https://github.com/vrapeutic/GardenDoWebVR.git), then click __Ok__.

5. You're ready to go!

### Preferred platform 
---
If you are going to be using a VR Headset, then we recommend trying the app (either the [hosted version](https://gardendodemo.glitch.me/) or on [Glitch](https://glitch.com/)) on the [Oculus Browser](https://developer.oculus.com/webxr/).



For local development and testing, modern browsers could be used, where mouse and keyboard interactions will be the main source of interaction with the VR environment.

## Code structures

-  __Assets__ directory
   - All GLTF models and sounds could be found in assets folder.

-  __index.html__
   - Contains environment entities .
   
-  __index.js__   
   - Here we define all our global variables and most of our variables used for statistics computation.
   
   
-  __js__ directory
   - Contains all logic and based on AFrame and JS code. Check [here](https://github.com/vrapeutic/GardenDoWebXR/blob/main/Js/README.md) for more information
   
# Contributions   

First off, thanks for taking the time to contribute! You can check out our contribution guidelines from this [link](https://github.com/vrapeutic/GardenDoWebXR/blob/main/CONTRIBUTING.md).

Please note that this project is released with a Contributor Code of Conduct, which can be found [here](https://www.contributor-covenant.org/version/2/0/code_of_conduct/). By participating in this project you agree to abide by its terms.
