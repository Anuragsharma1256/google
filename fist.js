/* git clone https://github.com/sabihak89/nobelium.git : downloads the specified repository on local system
 git status : shows if you have modified any files on your local after cloning the repository
 git branch : can be used to check the active branch
 git branch -a : Lists all the branches of the repository
 git checkout -b practice : creates a new branch called ‘practice’ from the current branch(main by default)
 git checkout account : Switches to an existing branch called ‘account’  from the current branch
 git fetch : Downloads the content of a remote repository. When you clone a repository its details are downloaded at that time. For any changes done later in the repository on a different device or at a different location to sync the local version of your repository with the remote use this command. Some common changes to a repository are creation of new branches, deletion of an existing branch, etc.
 git pull –rebase : Updates the active branch. Pulls changes from remote.
 git stash : This removes the local changes on your branch and maintains it locally. To reapply the stashed changes use 'git stash apply'.
 git reset –hard origin/branch-name [2 hyphens]: undo local changes and brings the state to the branch at Github (use this if stash isn’t fully working for you)
 git log : Shows a list of commits made to the repository and the branch that is currently checked out. (shows you the same history that we checked at Github)
 git add random.txt : Adds all those file that are required to be pushed (these files should be present already. Git add doesnt create files for you )
 git commit -m “Added a text file for demo” : Creates a commit with a relevant message
 git push repo-link: pushes the commit to the specified remote repository
 git push --set-upstream origin (Only applicable when pushing a new branch for the first time to the same repository you are at)
 git branch -D branch-name-to-be-deleted : You have to checkout branch A first if you are trying to delete branch B.*/