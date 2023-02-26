from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/leetcode')
def leetcode():
    return render_template("leet-code-index.html")

@app.route('/leetcode/1')
def num_1():
    return render_template("/leetcode/1.html")

@app.route('/test')
def test():
    return render_template("test.html")