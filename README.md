Group member: Wenbei Zheng

- heroku deployment: https://dashboard.heroku.com/apps/still-mesa-81896

There're still a lot work to be done for this app. For now, the user can sign in with Google OAuth. If the user didn't sign in, they won't be taken to the dashboard page, where the user can log a new sleep, a formula intake, and a diaper change. 

At this moment of updating, one issue is about the modal component and form submission. Since the three activity loggings have their unique states, one universal modal is unsatisfying. However, with multiple modals in one js file doens't seem to be ideal either. 

Another issue is about the form submission. Upon clicking the ADD button, there should be a new line added to the corresponding table (a table for sleep logs, for example). A link between these two components might work?

Also, the mongoDB seems to save the users data on Atlas, however, the new nursing log collection wasn't tested successfully.

Will keep working on this project. Regarding the deadline, this is all I have for now. 