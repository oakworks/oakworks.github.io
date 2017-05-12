---
title: 'Building an RFID Relay using Electron: AlienRunway'
subtitle: Cross-Platform Solution for Relaying RFID Data
layout: post
modal-id: 6
date: 2017-05-10
category: technical
keywords: electron,react,reactjs,redux,node,alien,alr-9650,runscore,bluefootedtiming
author: Daniel Swain
pic: https://avatars0.githubusercontent.com/u/6841386?v=3&s=134
description: Need a cross-platform desktop application? Using Electron, you can develop an app once and build it for any modern OS! In this article, we talk about how we took a problem -- how to have many RFID readers communicate to a race-scoring server -- and created a modern solution using Electron.

---

# {{ page.title }}

## {{ page.subtitle }}

___

Building a native desktop application can be a hassle. If you're creating an application for OSX, you open Xcode and start coding in Swift or Objective-C.
What happens when you need to use the app on Windows? Easy. You get on Windows, open Visual Studio, and start writing C++ or .net.

Alright, now maintain both of those products.

That's where Electron comes in. Electron makes it incredibly easy to develop an application using Javascript and then having that app build cross platform. Using Electron we made AlienRunway, an RFID Relay Cross-Platform desktop app ([See more info about Electron here](http://electron.atom.io)).

### What is AlienRunway?

![AlienRunway Splash](/img/portfolio/alienrunway-splash.png){: .img-responsive.img-centered}

AlienRunway is a middleware application that relays RFID TagStreams to a RunScore Server -- a race-scoring application ([See more info on RunScore here](http://www.runscore.com)). Users can configure Alien RFID Readers, back up all data relayed, and allows for multiple readers to communicate to only one point of contact.

### Why would you use AlienRunway?

AlienRunway makes it very easy to hook up multiple RFID readers for the purpose of synchronizing times for running races.

RunTime, the company that developed RunScore, created RunScore Client to relay reader information to RunScore Server. However, RunScore Client can only have 1 reader at any moment communicate with it. In order to have multiple readers, multiple instances of the client have to be initialized. As you can imagine, this creates  overhead.

### How does it work

AlienRunway functions between two services, the Alien RFID Readers and RunScore Server.

RFID TagStreams are sent from RFID Readers; we are using Alien ALR-9650 RFID Readers ([See more info on Alien Readers here](http://www.alientechnology.com)).
RunScore Server is a windows application that's widely used to keep score of athletes' times. It's used for events such as marathons, triathlons, etc.

With that in mind, we begin by starting up AlienRunway. Clicking on the wrench icon brings up the configurations. First we need to configure the address and port information for the _AlienRunway Server_ and the _RunScore Server_.
![Configurations](/img/portfolio/alienrunway-config.png){: .img-responsive.img-centered}

Once we've saved the configurations, we can press Sync Readers. This will send telnet commands to all RFID Reader addresses mapped in the configurations. The telnet commands will configure the readers to have the correct TagStream format and TagStream Notify address & port set. The reader's name is also configured to be set to the "event".

Clicking the lightning icon will retry the connection to RunScore Server and hitting the refresh icon will restart the AlienRunway Server using the updated settings.
![Connected!](/img/portfolio/alienrunway-status.png){: .img-responsive.img-centered}

We can check on status messages by clicking the hamburger icon next to the wrench.
![Started!](/img/portfolio/alienrunway-started.png){: .img-responsive.img-centered}

Now that everything is ready, we can hit start on the timer. Now that the timer is running, scanning RFID tags past the readers will initiate an input of stream data. That data is received by AlienRunway, is backed up, and sent on to RunScore.
This update can be seen on RunScore's results window for the "event" or reader scanned.

### Why choose Electron to build AlienRunway?

Electron opened us up to using powerful JavaScript tools to create the application quickly and succinctly. We used ReactJS to create the components and Redux to manage the application state. This made it incredibly simple to develop due to the very robust React and Redux DevTools at our disposal. 

We made use of the NodeJS Library, which allowed us to create connections and manage the listener server. Electron also has nifty native OS functions like desktop notifications and native file system access. These functions made the app feel tailor made for the OS.



Need help getting started? [Get in touch!](/#contact)