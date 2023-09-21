# Sprint 3 - Module 4 : Web Deployment

## [Training Kit](https://github.com/BloomInstituteOfTechnology/Full-Stack-Web-Curriculum/tree/main/03-WebApplications-II/Sprint%2003%20-%20Advanced%20Web%20Applications/Module%204%20-%20Deploying%20Web%20Apps)

----

## Objectives

By the end of this module, learners should be able to:
* explain how the world wide web works
* explain what it means to "deploy" a static web app
* demonstrate the ability to deploy and maintain a React App using Vercel

----

## Instructor Resources
* 🐙 [Guided Project Starter](https://github.com/BloomInstituteOfTechnology/web-guided-project-deploying-web-apps)
* 🐙 [Guided Project Solution](https://github.com/BloomInstituteOfTechnology/web-guided-project-deploying-web-apps-solution)
* 🐙 [Module Project](https://github.com/BloomInstituteOfTechnology/web-module-project-deploying-web-apps)
* 🐙 [Module Project Solution](https://github.com/BloomInstituteOfTechnology/web-module-project-deploying-web-apps-solution)

----

## Guided Project Slack Message
> Hey all! You made it! Welcome to the last day of Unit 3! You made it!
> Today’s guided project does not require external code, so need need to clone a repo today.
> _______________________________________________________
> What we do ask, if you have not already, is follow the instructions in your course material to setup an account on https://vercel.com.
> 
> :point_right: Slido event: https://app.sli.do/event/msea4w8q

----

## Guided Project Zoom Invitation:
> **Unit 3 | Sprint 3 | Module 4: Web Deployment**
> _______________________________________________________
> Zoom Link : *insert zoom link*
> Slido: *insert slido link*
> Module Project: https://github.com/BloomInstituteOfTechnology/web-module-project-deploying-web-apps

----

## Check for Understanding Questions

These are the questions used internally to check student understanding. Students will be instructed to answer these questions after the guided project. Please make sure to emphasize the concepts behind these answers.

#### What is a "web server"?
* Just the code that runs a server
* **Both a server machine, and the code to run it**
* Just a server machine
* A database

#### What would NOT be considered a "client" in web programming?
* The web browser
* A desktop application
* **The web server**
* A mobile device

#### Unlike static apps, in our definition dynamic apps _.
* Frontend only app
* Only display static data
* **consume a 3rd party API**

## Guided Project Outline

### Layout of the Day

### Understanding Internet Inferstructure
* Speak to browsers as file display.
* Explain that the interest is in where it gets display data from.
* Explain the client / server relationship

### The Example of Amazon web services
* Amazon AZ1 in Northern Virginia
* Holds Netflix, Slack, Nasa, AirBnB, Dow Jones
* Netflix alone is 15% of ALL internet traffic
* There needs to be some way of organizing what data goes where

### Speak to the need for protocals
* Protocals allow us to create a common language for internet communication.
* TCP / IP - Transmission Control Protocol / Internet Protocol - handles the address system and byte traffic of internet communication
* HTTP - Hypertext Transfer Protocol - structures requests between servers and clients
* Describe the Server-Side Rendering Process
* Describe the Client-Side Rendering Process

### Speak to Deployment
* Note that to have global access to a site, you need to upload it to an external server.
* Speak to Internet Hosts as a start.
* Speak to cloud computing services
* Speak to vercel, datify and heroku like services.

### Speak to DevOpps
* Creating a process around deployment, testing and maintainance of a site.
* Also speaks to project management

### BREAK

### Signup to Vercel
* Have students go through the process, following along with their training kits.
* Have them stop at the Import Project Screen

### Create a Vercel Template
* Tour project frameworks within vercel
* Create a new CRA app.
* Tour the Build options for a project.
* Note that it builds a template version of a site.
* Note the github repo that has been created.
* Note that we can clone that project and modify it.
* Install vercel command line interface
* Note that dev is added in as a build script.

### Updating a project
* Run the project locally.
* Note that we have a production and a local version of the site.
* Modify the local code and check the result locally.
* add / commit and push changes to github.
* Note that we have updated github.
* Note that on our page we see out updated site.

### Creating a project from a github repo
* Return to import project page.
* Go to import a git repo from a github repo
* Use the project of your choosing.
* Clone the project locally and update.
* Push changes and note the rebuild.

### Note the differences between static and dynamic sites.
* Make a note that we need to have sites that only access services it can actually use.





#### Using Zeit
- Go over Zeit and what it does. Many student ask how it compares to Netlify. Feel free to research this question to be ready for it, or you can use the generic "We want you to use and experience different tools" type answer as well 😂
- Walk through creating a deploying an app from the Zeit website
- In the newly created project, make change and commit and push that change. Then show the new deployment in your Zeit profile
- Now go to the `domains` tab in the project page and add a free (somewhat) custom domain
  - This gives you a `domain.now.sh` url rather than `project.username.now.sh` and looks a little cleaner on portfolios
  - To set this up, type in a domain name (**with .now.sh on the end**) into the input. If it is free, add it to the project
  - Go back to the `Overview` tab to see your new, "cleaner" domain
- If you have time, show how to deploy an app that you've already created from the `now` cli
- Breakout session (may need about 20-25 minutes for this) Instructions for students:
  - One person in the breakout room create and deploy a **public** repo through Zeit
  - Add everyone in the breakout room as collaborators 
  - The repo owner should make one change, commit and push the change, then show the group the new deployment on zeit
  - Have the other students clone that repo (not fork), create their own branch, make one change, commit and push that change
  - Have the first student then show the new deployments (there should be one for each branch)
- Breakout retro - discuss how this could be helpful during build weeks or labs - to have each team member have their own branches deployed live all the time
  
#### Common gotcha with `now`'s configureless deployments
Deploying an app where the React app is "nested" in a directory in the repo:

Add a `now.json` configuration file in the base of the repo with this in it:
```json
{
    "version": 2,
    "name": "project-name",
    "builds": [{ "src": "project-name/package.json", "use": "@now/static-build", "config": {"distDir": "build"} }],
    "routes": [
        { "src": "/(.*)", "dest": "project-name/$1" }
    ]
}
```
replace `project-name` with the React project name (the React folder name)

#### Module project
This project is a pretty light project. Let TLs know this, and let them know to inform students that finish early that they can work on catching up with any projects they want to work on.

Also, many students have asked about just using Netlify for this modules. This point here is to use Zeit and try a different tool. If they don't want to add a project that's been deployed to Zeit on their portfolio, they can get approval form their TL to just deploy any project to Zeit and show that they have completed that.

### Module Project Review
* [Deploying Web Apps](https://github.com/BloomInstituteOfTechnology/web-module-project-deploying-web-apps)

## Breakout Slack Messages

----

## After Class Message
Hope you all enjoyed today's guided Lesson!
A reminder if that office hours are from 2:30 - 3:00 Lambda Time. Don't forget to complete the days Check for Understanding and Pulse Checks! 

Module Project
https://github.com/BloomInstituteOfTechnology/web-module-project-deploying-web-apps

Here is a review of today's material.

Key Terminology
* 📝 *Environmental Variables* - [An environment variable is a variable whose value is set outside the program, typically through functionality built into the operating system](https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use-them-f602f66d15fa)
* 📝 *TCP / IP* - [Transmission Control Protocol / Internet Protocol - the web standard that defines the routing of data between client and server](https://www.youtube.com/watch?v=PpsEaqJV_A0)
* 📝 *HTTP* - [Hypertext Transfer Protocal - the web standard that defines the structure of server requests and responses](https://www.youtube.com/watch?v=iYM2zFP3Zn0)
* 📝 *Client Side Rendering* - [An approach to web application development where most data interactions are handled through client code.](https://www.youtube.com/watch?v=38Fv4FTXuDg)
* 📝 *Server Side Rendering* - [An approach to web application development where most data is constructed within server and transfer to the client in it's entirety](https://www.youtube.com/watch?v=RAhYnK0v3rk)
* 📝 *DevOps* - [Developer Operations - a role in software development concerned with the testing, deployment, maintainance and project management of an application](https://www.youtube.com/watch?v=_I94-tJlovg)
* 📝 *CI / CD* - [Continuous Integration / Continuous Development - the process used within a organization for testing, deployment, maintainance and project management.](https://www.youtube.com/watch?v=scEDHsr3APg)
* 📝 *Cloud Computing* - [A service that manages the entire technical inferstucture of an application (databases, hosting, domain services, remote code execution) remotely.](https://www.youtube.com/watch?v=dH0yz-Osy54)
