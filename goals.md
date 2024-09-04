# Functional requirements that would be nice to implement:

#### 1. Render posts containing Pokemon VGC events in Sydney

- Contains information such as date in the format of September 13, 2024 6:30PM, event_name, location, event_type e.g. VGC

#### 2. Clicking on rendered posts should give more detail about the Pokemon VGC event

- E.g. Organiser Phone number, email, website, entry fee, description, registration time
- Posts should have an id to create dynamic routing for each unique post

#### 3. Users can register to make an account and login

- Sign-up and login page

- Maybe use JSON Web Tokens (JWT)

#### 4. Registered users can comment in a comment section for an event

#### 5. Registered users can favourite or pin events to keep up to date with events they are interested in

#### 6. Registered users can mark as "going" or "interested" similar to Facebook events

### Features that could be possible extensions if I remain interested:

#### 7. Add Jest for unit-testing / snapshot testing

#### 8. Use Java backend API to handle async calls to database?

- This could probably be done with Next.js API, but there is value in separating backend code from frontend (e.g. backend issue influencing frontend and vice-versa)
- E.g. (create, read, update, delete)

#### 9. PostgreSQL for DBMS of event data and user profile data

#### 10. Implementing best practices for session management

#### 11. Add to Google Calendar button to integrate all or some Pokemon VGC events automatically into calendar once signed in to Google Account

- E.g. expiring tokens, encryption of usernames and passwords with salt/secret
