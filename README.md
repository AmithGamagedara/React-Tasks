# 📷 Image Search & Gallery (React Project)

This is a single-page React application that lets users search for images using the Unsplash API and display them in a responsive gallery. Users can mark images as favorites, and the total count of favorites is shown in the header.

### 🚀 Features

- Search images using the Unsplash API
- Responsive image gallery with individual image cards
- Add / remove images from favorites
- Favorites count shown in the header using React Context

### How I Used React Concepts

#### JSX -->
Used JSX to write UI code that looks like HTML but works with JavaScript. 
example: used JSX inside the return() of components to render images and buttons inside <div> elements.

#### Props -->
Props are used for passing data from a parent component to a child component. In this task, I used props to pass image data from the ImageList component to the ImageCard component. This allowed each card to display different images.

#### State -->
Used state to manage dynamic data, such as the list of favorites in the ImageContext and the search results in the App component.

#### Context -->
Created a ImageContext to add/remove favorites list and count across multiple components (e.g., Header and ImageCard) without passing props manually.
