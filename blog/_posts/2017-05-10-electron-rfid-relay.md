---
title: 'RFID Relay using Electron: AlienRunway'
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

Going about building a native desktop application can be complex. If you're creating an application for OSX, you open Xcode and start coding in Swift or Objective-C.
What happens when you also need the app Windows? Easy. You get on Windows, open Visual Studio, and start writing C++ or .net.

Alright, now maintain both of those products.

That's where Electron comes in. Electron makes it incredibly easy to develop an application using Javascript and then having that app build cross platform. Using Electron we made AlienRunway, an RFID Relay Cross-Platform desktop app ([See more info about Electron here](http://electron.atom.io)).

### What is AlienRunway?

![AlienRunway Splash](/img/portfolio/alienrunway-splash.png){: .img-responsive.img-centered}

AlienRunway is a middleware application that relays RFID TagStreams to a RunScore Server -- a race-scoring application. Users can configure Alien RFID Readers, back up all data relayed, and allows for multiple readers to communicate to only one point of contact.

### Why would you use AlienRunway?

RunTime, the company that developed RunScore, created RunScore Client to relay reader information to RunScore Server. However, RunScore Client can only have 1 reader at any moment communicate with it. This becomes the case where in order to have multiple readers, multiple instances of the client have to be initialized. As you can imagine this creates a lot of overhead.

### How does it work

RFID TagStreams are sent from RFID Readers; we are using Alien ALR-9650 RFID Readers ([See more info on Alien Readers here](http://www.alientechnology.com)).
RunScore Server is a windows application that's widely used to keep score of athletes' times. It's used for events such as marathons, triathlons, etc. ([See more info on RunScore here](http://www.runscore.com)).
Knowing all that, here's how a user would use AlienRunway:

1. Start AlienRunway

1. Configure the readers to talk to the AlienRunway

1. Connect AlienRunway to the RunScore Server

1. Scan RFID tags across the readers

1. The readers relay the info to AlienRunway

1. AlienRunway formats the data

1. The data is backed up locally & sent to the RunScore Server

### Why choose Electron to build AlienRunway with?

Electron opened us up to using powerful JavaScript tools to create the application quickly and succinctly. We used ReactJS to create the components and Redux to manage the application state. This made it incredibly simple to develop due to the very robust React and Redux DevTools at our disposal. We also had access to the NodeJS Library, which allowed us to create connections and manage the listener server.

Electron also has nifty native OS functions like notifications and file system access. These functions made the app feel tailor made for the OS.



Need help getting started? [Get in touch!](/#contact)