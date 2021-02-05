# Requirements

##Vision

### Pain Point & Our Solution:
- There are a lot of uninformed prospecting pet owners out there and a lot of shelter pets that needs homes. We are trying to bridge the gap of miscommunication and information in order to find shelter pets their ideal homes, and pet owners their ideal pet for their lifestyle. 

## Scope 

### In: 
- The web app will allow a user to view adoptable shelter pets using the PetFinder API as well as taking submissions from individual owners looking to rehome their pet 
- The web app will also allow a user to take a lifestyle and household quiz to try and best match them to available pets 
    - A user can make a profile to save their quiz answers and their saved matches 
- A user with a profile will also be able to submit a pet that they need to rehome and that can be reviewed by an admin account for approval 
- An admin account can review submissions and approve them to be listed in our search results 
- Search results will be cards of the pets with photos, descriptions and a link to contact whoever is listing the pet 

### Out:
- The web application will not allow breeders to post listings, this is a rehoming/rescue application only.
- The web application will not turn into an IOS or Android app.

## Features

### MVP:
- Auth- Cookies
- API call to Petfinder API for list of available cats and dogs
- ACL - admin vs regular users 
- optional quiz to match user to pets -> login or sign up to save your results
- "Email to" link for users to express interest in a given pet
- React or Svelte? for fron end framework 
- Database- ACL, Users, Matched/Saved Pets

### Stretch
- Resources (link to other pet articles)
    - vets, pet food, training etc
- Featured pets list (especially a featured senior pet)
- A social network with people who have other rescue animals
- Find foster homes/foster animals
    - Foster to adopt? 
- a messaging system between profiles 

## Functional Requirements:
- As a user: I want to be able to view adoptable pets and navigate the application easily (basic)
- As a user: I want to be able to search for pets based on my lifestyle and save the matches to my profile.
- As a user: I would like to be able to view my saved pets at any given time.
- As a user: I would like to be able to easily contact a shelter/rescue/person about a particular pet I have matched with.
- As a user: I would like to be able to submit a pet listing for review to be published on the search results.
- As an admin: I would like to be able to review submissions, and approve them for listings to the search results.
- As a developer: we want to remove pets from the listings that have been adopted (or maybe tag their profile as adopted).
- As someone who made a listing: I would like to be able to know who adopted my pet from the site. (stretch)


## Non-Functional Requirements
- Testability: we want to strive for 90% test coverage to ensure our application behavior is acting as expected and to prevent bugs, or glitches that may hinder the user experience. 
- Security: we want to utilize some sort of encryption security to ensure our user information is safe. 