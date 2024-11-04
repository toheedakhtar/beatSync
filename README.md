# beatSync - a knn based music recommender 

beatSync is a knn ( a machine learning algorithm ) based music recommender. The dataset has ~3500 songs and recommends songs similiar songs based on the songs features such as dancebility, energy, popularity, etc.

## [Demo](https://beat-sync-eight.vercel.app/)
Fully working Live Demo - [Click here](https://beat-sync-eight.vercel.app/)  
(First request takes longer times, after it response time is ~500ms - 800ms)

## Tech Stack

### Frontend
- Fronted is built on ReactJS with vanilla JS.
- Deployed on Vercel.

### Backend 
- Backend is built on Flask to serve the model,
- Deployed on Render (First request will take a longer time, render free-tier. Normal requests take 500ms - 800ms)

### Model 
- Used scikit-learn, pandas.
- sickit-learn knn.neighbours for implementing KNN.

### Dataset 
- Datset is in the repo.
- has ~3500 songs with 13 features each. 
