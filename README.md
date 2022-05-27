
# React with Google Firebase

  A repository made for Flexy (https://flexy01.herokuapp.com/).

## Prerequisites :

-   A Google Account for Google Firebase.
	- <img src="https://img.icons8.com/color/48/000000/google-firebase-console.png"/> Firebase Login: [Firebase (google.com)](https://firebase.google.com/)
    

-   An IDE (e.g VSCode, Atom etc)
    

	-   <img src="https://img.icons8.com/fluency/48/000000/visual-studio.png"/> VScode (Recommended): [Visual Studio Code - Code Editing. Redefined](https://code.visualstudio.com/)
	    
	-  <img src="https://img.icons8.com/color/48/000000/atom-editor.png"/> Atom: [Atom](https://atom.io/)
	- <img src="https://img.icons8.com/office/40/000000/java-eclipse.png"/> Eclipse: [Eclipse Downloads | The Eclipse Foundation](https://www.eclipse.org/downloads/)

  

## Step-by-Step Walkthrough

  
-   Log into Google Firebase and follow the on screen instructions.
    
-   Add the features you want to use in your web/mobile application (i.e Realtime Database, Cloud Firestore, Authentication, Analytics etc.)
    
-   Now, open the setting and scroll down to “Your apps” sections.![](https://lh4.googleusercontent.com/gSUAcXTNgqUAuZNjfOhPs8BAatTExgluqD2N9oVVhr4OpkOlDMqtAEu2nxvRnHC-fzPOQ238mgUzXI4-Jei_XQ1PSyRdKTp0ONm4MZxu7WkOsDXSp-DGg7IrY5G_px9-NANv4U1X9UkiuLPJtw)
    
-   The setting page will appear like this
    

![](https://lh4.googleusercontent.com/-LvHLF73kuQCZfAROHdyY0nhyx_KwOT1fXnBHAIcuHBqesain8QhaeHojC9qcd5Qjs7BZNDbOOMUjnVQlU5_wf8x4AYlAZVDRf-poNZkVQRlNA1qlEyRId-JyGF1mpXcDJPKuyrIRkzIDqNGiQ)

  

-   Then copy and paste the access token (firebaseConfig) in a text file to be used later.
    
-   Download the starterkit.zip and extract the files.
    
-   Navigate into the starterKit folder.
    
-   Paste the firebaseConfig data into the .env file respectively.
    

![](https://lh6.googleusercontent.com/-7Tc1uBmeVVtw8uk9SUl1B-vSeoxoOR4Eyfca6987qWcSOBtI0Z6gLkSYjy6He-3vWHlkg7Ohh3I5Q5wLqrxBQfm3ROSYPO6b057Smrg0W3YJPIJXsUg10j83PlFq0a3wXwKS6Jj9GXNamx_FQ)

  The .env file looks like this:-

![](https://lh6.googleusercontent.com/2pRZco7Qsvzwt-QkIAvQOGv3BQvScvN7b2p97_OU7Xeuc1zP1NE4S662Cu98glyRTQ6wRO1RZklm1i8D-heHjQNojg0vzxC-zuvqD-t2JhTnS0j5I7Qj51iDf1CXKeL8m5LA7P4HRvQ0BM_ElA)

-   Open the react application folder.
    
-   Now run the command `npm install` to download the dependencies.
    
-   Navigate to the folder named >src>utils>firebase.js
    

![](https://lh5.googleusercontent.com/k5wNMniPhHal5jUZi-PxaakBxJ2LoiBz4UfouQd1zErSAJiy1-Mkuf8N33LdQAIDs0dBa_WoSzKnJjcS6MEFeoAGLeIyg1MvYrDiE3oC7Y2Yb0vEMZsQXQN-8GedbQzpWScNq0dIhwV1CwMYMw)

-   Now paste your access token in the file.
    
-   Run `npm start` and your application will be started on your local machine.
