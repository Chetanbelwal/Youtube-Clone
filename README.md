
# YouTube Clone

## Introduction
The YouTube Clone is a web application that replicates some core features of YouTube. This project allows users to browse and search for videos, view video details, and interact with a live chat feature. The frontend is built using React and Tailwind CSS, while Redux Toolkit is used for state management. The app utilizes the YouTube API to fetch video data, including channel information, likes, and subscribers. 🚀

## Content
- Technology Stack
- [Project Type](#project-type)
- [Deployed App](#deployed-app)
- [Directory Structure](#directory-structure)
- [Video/Photo Walkthrough of the project](#video-walkthrough-of-the-project)
- [Features](#features)
- [Installation & Getting started](#installation--getting-started)
- [Environment Variables](#environment-variables)
- [Design Decisions or Assumptions](#DesignDecisionsorAssumptions)
## Technology Stack
- React: A JavaScript library for building user interfaces.

- Tailwind CSS: A utility-first CSS framework for styling.

- Redux Toolkit: A state management tool for handling application state efficiently.

- YouTube API: Used for fetching video data, including search results, channel details, likes, and subscriber count.

## Project Type
Frontend Only

## Deployed App
Frontend: [https://youtube-clone-mauve-one.vercel.app/]

## Directory Structure
```
Youtube-Clone/
├─ public/  
│  ├─ All Images are here  
├─ src/  
│  ├─ components/  
│  │  ├─ Body.jsx  
│  │  ├─ ButtonList.jsx  
│  │  ├─ ChatMessage.jsx  
│  │  ├─ Feed.jsx  
│  │  ├─ LiveChat.jsx  
│  │  ├─ Navbar.jsx  
│  │  ├─ Sidebar.jsx  
│  │  ├─ VideoCart.jsx  
│  │  ├─ VideoContainer.jsx  
│  │  ├─ Watch.jsx  
│  ├─ store/  
│  │  ├─ appSlice.jsx  
│  │  ├─ chatSlice.jsx  
│  │  ├─ helper.jsx  
│  │  ├─ store.jsx  
│  ├─ App.css  
│  ├─ App.jsx  
│  ├─ index.css  
│  ├─ index.js  
├─ tailwind.config.js  


```
## Video/Photo Walkthrough of the project

Will Upload it soon


## Features
- Top Videos: Displays the top 50 trending YouTube videos on the homepage.

- Search & Filters: Users can search for videos and filter results using button categories.

- Search Suggestions: Implements YouTube's search suggestion API to enhance the search experience.

- Debouncing: Reduces unnecessary API calls when searching for videos.

- Live Chat: A dynamic chat feature where comments appear in real-time.

- User Comments: Users can comment on videos, and comments are shown as live updates.

- Video Details: Fetches and displays video details, including channel name, likes, and subscriber count.


## Installation & Getting started
To run the project locally, follow these steps:

```
## Install the Project
git clone https://github.com/Chetanbelwal/Youtube-Clone.git

## Navigate to project
d cd Youtube-Clone

## Install dependencies
npm install

## Start the development server
npm start
```

## Environment Variables
Make sure to set up the following environment variables in a .env file in the root

```
REACT_APP_API_KEY=Your_API_Key
REACT_APP_BASE_URL=https://www.googleapis.com/youtube/v3
REACT_APP_SEARCH_SUGGESTIONS_API=https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=

```
