# this is the conditional logic to determine what is rendered when someone enters anything for the dynamic url[username]

# check to see if the user is signed in with { userId } = auth() -- We've determined the user is signed in

# then

# check if the username is equal to the username of the signed in user, i.e. if the [username] = username of the user object from auth() (signed in user)

# if it is

# then

# render the page.tsx of the signed in user

# if it is not equal to it:

# then

# make a fetch from prismadb.findMany() of all the usernames in the database, or perhaps this can be a generate static params at build time:

# then

# if the [username] = any username in that allUsernames prismaFindMany,

# then

# render the page.tsx of the found username, and their User Details

# else if not any of the above cases,

# render the 404 page.tsx where you inform the visitor of this [username] page, that the url does not exist.
