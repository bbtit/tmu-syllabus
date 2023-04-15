import json

# JSONデータを読み込み
with open('python/class2023.json', 'r') as f:
    data = json.load(f)

# 特定のキーの値を数値に変換
data[''] = int(data['key'])

# JSONデータを出力
with open('data.json', 'w') as f:
    json.dump(data, f)
