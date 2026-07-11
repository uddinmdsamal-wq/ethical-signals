from flask import Flask, render_template, request

app = Flask(__name__)
@app.route("/")
def home():
    name = request.args.get("name")
    return render_template("index.html",
    name=name
    
    )
app.run(debug=True)
