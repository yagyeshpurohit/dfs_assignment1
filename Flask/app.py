#we need to import Flask from flask
from flask import Flask

app=Flask(__name__)

#Routes in Flask are created using the @app.route decorator and passing in a URL or path.
@app.route("/")
#This route will be triggered when someone goes to the root or index of our website
def index():
	return "Hello world!"
#Under the @app.route decorator, we simply write a standard Python function with a return statement.

#__name__ is a special variable used by the Python interpreter to understand if a file is the main program.	

if __name__=="__main__":
	app.run()