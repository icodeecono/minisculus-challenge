import json, subprocess
from mini import unmark4, put
# Code returned from PUT of question 4
code = json.loads(open("final_response.json").read())["code"]
hits = []
for w1 in range(10):
    for w2 in range(10):
        p = unmark4(code, w1, w2)
        if "FURLIN" in p and "BUNKER" in p:
            hits.append((w1, w2, p))
for w1, w2, p in hits:
    print(f"{w1},{w2}: {p}")
