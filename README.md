# Who am I? - Alexa skill

Who Am I? is a charades-based game that requires the player to correctly identify the described celebrity using at most 3 clues. The user squanders away points through every wrong guess and used hints.  
This is how it works! For every new game , a celebrity is selected at random from the DynamoDB database which also holds information associated with the celebrity. Using this information retrieved from database, clues are formed for user to guess from and responses/answers from user are validated as well. 
The data is currently obtained by scraping the Wikipedia pages of the respective celebrities which can always be further populated with information such as their most famous works, their awards or their quotes.

Future Scope: Here are the different ways in which this game can be further enhanced.

* Genre based: This allows the user to select a class/category such as “Actors”, “Writers” or “Chefs” from which the celebrity has to be guessed allowing the user to select their field of interest or knowledge.

* Time based: In this mode, a user plays to score as many right answers as possible in say 60 seconds or 120 seconds. This mode doesn’t care for wrong answers and keeps asking newer questions if either the user quits or clues end and counts only the number of correct guesses. 

* Endless Mode: In this mode, a user plays to maintain a streak of right answers. A single wrong answer leads to restarting of the mode, thereby leading the score back to zero. It calculates the highest number of right answers given at a time. 
One can also select a genre and Time based/Endless Mode for receiving questions related to their interest. 

* Visual clues:A user can also try identifying celebrities using images/video clips as clues that can be displayed on Echo Spot or Echo Show.

* Multi-player:This is where is gets interesting, in a multi-player game instead of randomly choosing celebrities, users are asked to provide names of different celebrities that they think their opposite player might not know or will not be able to guess. Once the names are stored, Alexa asks user one to guess the celebrities listed out by user two and vice versa. 

Who am I? Combines the best of both entertainment and gaming worlds to provide you with a good old-fashioned game that can be played by anyone and everyone. It can prove to be a great way to teach kids about various celebs across the world and the constant refreshing of data allows one to keep themselves abreast about various celebrities and fascinating facts about them that you can later flaunt in front of your friends. 
The instructions are extremely simple without any mumbo jumbo allowing users to be fully engaged with the game without creating any overhead.
