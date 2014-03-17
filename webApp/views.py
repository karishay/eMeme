from flask import Flask, render_template, redirect, request, session, g, url_for, flash
from flask.markdown import Markdown
import config
import model

app = Flask(__name__)
app.config.from_object(config)

#adding markdown capability
Markdown(app)

### Routes live here: ###
@app.route("/")
def index():
    #load the landing page
    pass

@app.route("", methods=["POST"])
def otherPage():
    #click on sentiments matching the photo
    #send the sentiments to the db
    pass

###some other stuff###
if __name__ == "__main__":
    app.run(debug=True)