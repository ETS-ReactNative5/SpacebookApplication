# SpacebookApplication
 
Introduction
The submission for the Mobile Applications Development coursework assignment can be found in this repository. The 'node modules' directory has been ignored by Git through the '.gitignore' file, as per best practises. A 'camelCase' structure was used to write all of the code. The 'SpacebookApplication' directory contains all of the files for the Android application. The version of npm used to develop this project is '8.0.0'. The Android application was developed and tested on a Pixel 2 (Play Store enabled) emulator running Android 7.0 (API 24). The recording for this submission will be contained within this repo, however, will not be uploaded to GitHub.

Things I learned through building this project:
•	General UI / UX as I had to consider how well the app responded to different usecases e.g., errors from the backend
•	Building a React Native app from scratch, using functional components & hooks (my course taught React Native using classbased components, however I already knew functional, so it made sense to me to use this instead).

Link to GitHub repo for submission https://github.com/Haider133/SpacebookApplication for submission purposes only)

Code Quality
I am using AirBNB style guide:
I enforced this through using ESLint and prettier, which automatically detected any issues and forced me to fix these throughout the project. https://github.com/airbnb/javascript

Spacebook Endpoints
All of the below endpoints have been fully implemented, including appropriate response/error handling.

User Management:
•	POST /user – Signup
•	POST /login - Login
•	POST /logout - Logout
•	GET /user/{user_id} - View User Information
•	PATCH /user/{user_id} - Update Information
•	GET/user/{user_id}/photo- View User profile photo
•	POST/user/{user_id}/photo- Update User profile photo
Friend Management:
•	GET/user/{user_id}/friends- View list of friends for given user 
•	POST/user/{user_id}/friends-  Add new friend
•	GET/friendrequests- View list of pending friends requests 
•	POST/friendrequests/{user_id}- Accept a friend request
•	DELETE/friendrequests/{user_id}- Reject a friend request
•	GET/search- Find friends 

Post Management:
•	GET /user/{user_id}/post - Get list of posts for a given user
•	POST/user/{user_id}/post- Add a new post
•	GET /user/{user_id}/post/{post_id}- View a single post
•	Delete/ user/{user_id}/post/{post_id}- Delete a post
•	PATCH/ user/{user_id}/post/{post_id}- Update a post
•	POST/ user/{user_id}/post/{post_id}/like- Like a post
•	DELETE/ user/{user_id}/post/{post_id}/like- Remove a like from a post

App Features
List of features implemented:
•	Ability to create/register an account, login and logout.
•	Ability to view & edit the user's account details based of the saved values in the DB. e.g. Change First Name, Last Name & Email.
•	Ability to view and permissions to edit the user’s profile photo 
•	Ability to view friends  and add/delete a friend request.
•	Ability to view/add/delete/update a post, like/unlike a post.
•	Ability to view a user profile information by clicking either on the profile picture from search friends list or from post section. 
•	Application automatically bypasses the sign-in requirement if you have already signed in.
•	Splashy animation and animated loaders being used. Website being used to create splash animation https://lottiefiles.com/
•	A separate helper class(API/Index.js) being used for all async calls.
•	 A Separate styles/common class being used for all stylesheets.


 Extension task 1:
•	Ability to save local drafts of posts before sending them to the API.
•	Ability to view, edit ,post and delete drafts. 

Extension task 2:
•	Ability to schedule the date and time when a draft is posted.
•	Ability to perform the schedule at the background automatically(when the user is not on the app).

App Screenshots
Here are a few screenshots taken from the completed application:

![splashScreen](https://user-images.githubusercontent.com/99869892/157520659-e06ae8dc-ca2b-4484-8804-657a92eab195.png)


![Picture2](https://user-images.githubusercontent.com/99869892/157520736-61a0598d-9b49-4bc8-97b2-f12650cf3391.png)

How to Run
1.	Clone the repo, run 'npm install' to install the dependencies.
2.	Create your .env file with your DB config details.
3.	Run the server with 'npm start'.
4.	Go into the SpacebookApp directory & run 'npm install' to install the required dependencies.
5.	To run the application use 'npx react-native run-android'.
6.	Application should compile, install, and launch.
 PSA: You need an account to use or signup within the application to create an account in seconds.
Enjoy!

Future:
•	Fully iOS support
•	In profile section user able to see the friend list along all their posts.
•	Revamp the UI
