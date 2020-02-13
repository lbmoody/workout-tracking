# workout-tracking
workout tracking app with node/express server and mongodb

## installation
This app has 3 npm dependancies [express](https://www.npmjs.com/package/express) for node js, [mongoose](https://www.npmjs.com/package/mongoose) to set up the mongoDB model, and [morgan](https://www.npmjs.com/package/morgan) for server-side logging. Please run an `npm i` to install dependancies.

## usage
Track your workouts and exercises with this application. Create a new workout and add excercises. First choose between different exercise types, Resistance or Cardio. After selecting a type enter the workout and the its details. These details include, weight, number of sets, distance or the time spent. After enter the details they are saved to the mongo database. Users can then access `/stats` where they are able to see a visualization of their pas workouts and exercises. 

## screenshots
Landing Page
![image](https://user-images.githubusercontent.com/24512590/74455499-9acaa000-4e42-11ea-811f-70a5b9b0b32e.png)

Add an Exercise
![image](https://user-images.githubusercontent.com/24512590/74455808-20e6e680-4e43-11ea-9ae1-8e0d32683a9d.png)

Workout Tracking
![image](https://user-images.githubusercontent.com/24512590/74455905-44aa2c80-4e43-11ea-925b-f584e36f37d1.png)