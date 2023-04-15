import csv
import json

# tsvファイルのパス
tsv_file = "python/class2023.tsv"

# jsonファイルのパス
json_file = "python/class2023.json"

# tsvファイルを開き、tsvファイルの内容を読み込む
with open(tsv_file, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f, delimiter='\t')
    rows = list(reader)

# jsonファイルに書き込む
with open(json_file, 'w', encoding='utf-8') as f:
    json.dump(rows, f, ensure_ascii=False, indent=4)