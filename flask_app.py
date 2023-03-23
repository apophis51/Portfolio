from flask import Flask, render_template, request

app = Flask(__name__)
import requests

url = "https://app.amattendees.com/v2/getdata.php?query=Anna Andreyev&intent=all"

payload={}
headers = {
  'Cookie': 'PHPSESSID=921020764f422f4cb7a1a69853e08186'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)



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

@app.route('/shawn' , methods=['POST', "GET"])
def shawn():
        if request.method == 'GET':
         return render_template("Victory.html")
        
@app.route('/shawnn' , methods=['POST', "GET"])
def shawnn():
        payload = request.form['payload']


        url = f"https://app.amattendees.com/v2/getdata.php?query={payload}&intent=all"

        payload={}
        headers = {
        'Cookie': 'PHPSESSID=921020764f422f4cb7a1a69853e08186'
        }

        responsee = requests.request("GET", url, headers=headers, data=payload)

        



        return render_template('Victory.html', jsonlist = responsee.json())
