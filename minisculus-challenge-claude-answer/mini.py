import json, sys, subprocess
BASE = "https://minisculuschallenge.com"
KEYS = list("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.,?!'\" ")
N = len(KEYS)

def shift(msg, s):
    return "".join(KEYS[(KEYS.index(c) + s) % N] for c in msg)

def mark1(msg, w): return shift(msg, w)
def mark2(msg, w1, w2): return shift(msg, w1 - 2 * w2)

def mark4(msg, w1, w2):
    out, prev = [], 0
    for c in msg:
        out.append(KEYS[(KEYS.index(c) + w1 - 2 * w2 + 2 * prev) % N])
        prev = KEYS.index(c)
    return "".join(out)

def unmark4(msg, w1, w2):
    out, prev = [], 0
    for c in msg:
        p = (KEYS.index(c) - w1 + 2 * w2 - 2 * prev) % N
        out.append(KEYS[p]); prev = p
    return "".join(out)

def put(qid, answer):
    out = subprocess.run(["curl", "-s", "-o", "/dev/stderr", "-w", "%{http_code} %{redirect_url}", "-X", "PUT",
                          "-H", "Content-Type: text/plain", "-d", json.dumps({"answer": answer}), f"{BASE}/{qid}"],
                         capture_output=True, text=True)
    return out.stdout, out.stderr

def get_question(qid):
    out = subprocess.run(["curl", "-s", "-H", "Accept: application/json", f"{BASE}/{qid}"], capture_output=True, text=True)
    return json.loads(out.stdout)["question"]

if __name__ == "__main__":
    qid = "4baecf8ca3f98dc13eeecbac263cd3ed"
    ans = unmark4(get_question(qid), 7, 2)
    print(ans)
    print(put(qid, ans))
