import requests

url = "https://app.amattendees.com/v2/getdata.php?query=Anna Andreyev&intent=all"

payload={}
headers = {
  'Cookie': 'PHPSESSID=921020764f422f4cb7a1a69853e08186'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)


