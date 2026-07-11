from flask import Flask, render_template, request
import os

app = Flask(__name__)

@app.route("/")
def home():
    name = request.args.get("name")
    return render_template("index.html", name=name)

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=int(os.environ.get("PORT", 5000)),
        debug=True
    )
