import requests

API_KEY = "your_key"
REGION = "eun1"
SUMMONER_NAME = "SplitP01"

url = f"https://{REGION}.api.riotgames.com/lol/summoner/v4/summoners/by-name/{SUMMONER_NAME}"
headers = {
    "Authorization": f"Bearer {API_KEY}"
}

# region: EUNE / eun1
# PUUID: "IH-4KwtKdZt8SVN4oFnv8-aPJVfE35gukCtLTDOALFAIAWXoeAkzCksFyzIZx6TyG_46ctXWZfiTqA"   
# summoner name: SplitP01
# tagline: #EUNE

response = requests.get(url, headers=headers)

# Debug: print full response first
print("Status Code:", response.status_code)
print("Response JSON:", response.json())
