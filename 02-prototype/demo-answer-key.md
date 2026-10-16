# Answer key · Juno Risk radar demo data

This key goes with `demo-threads-100.txt`. Today is Monday 19 October 2026.
The data file has 101 lines: the Today line and 100 threads. It has 19,207 characters.
The prototype accepts a maximum of 20,000 characters (`app/server.mjs`, `MAX_INPUT_CHARS`).

## How this key reads the rules

- **Silent:** count the weekdays after the last reply, up to and including today. 3 or more weekdays make the thread Silent.
- A last reply on 13 Oct gives 4 weekdays. A last reply on 15 Oct gives 2. A last reply on 16 Oct gives 1.
- **Date at risk:** the committed date is from 20 to 26 Oct, or before 19 Oct. The data uses only 20 to 23 Oct, and 2 to 13 Oct.
- The data does not use 28 Oct. If you count 7 weekdays from today, 28 Oct is weekday 7. The first committed date after the window is 29 Oct.
- **Data gaps:** Juno cannot calculate Silent for a thread with "last reply: missing". The table shows "no" for Silent on these threads.
- **Accounts:** a thread with a quote shows its accounts as a number. This rule keeps each line at 220 characters or fewer.

## 1. Signals for each thread

| ID | Silent | No owner | Date at risk | Spread | Escalation | Signals | Data gap |
| :- | :- | :- | :- | :- | :- | -: | :- |
| RS-3001 | no | yes | no | no | no | 1 | no |
| RS-3002 | no | no | no | no | no | 0 | no |
| RS-3003 | no | no | no | no | no | 0 | no |
| RS-3004 | no | no | no | no | no | 0 | no |
| RS-3005 | no | no | no | no | no | 0 | no |
| RS-3006 | no | no | no | no | no | 0 | no |
| RS-3007 | no | no | no | no | no | 0 | no |
| RS-3008 | no | no | yes | no | no | 1 | no |
| RS-3009 | yes | no | no | no | no | 1 | no |
| RS-3010 | no | no | no | yes | no | 1 | no |
| RS-3011 | no | no | no | no | no | 0 | no |
| RS-3012 | no | no | no | no | no | 0 | no |
| RS-3013 | no | no | no | no | yes | 1 | no |
| RS-3014 | no | no | no | no | yes | 1 | no |
| RS-3015 | no | yes | no | no | no | 1 | no |
| RS-3016 | no | no | no | no | no | 0 | no |
| RS-3017 | no | no | no | yes | no | 1 | no |
| RS-3018 | yes | no | no | no | no | 1 | no |
| RS-3019 | no | no | no | yes | no | 1 | no |
| RS-3020 | no | no | no | no | no | 0 | no |
| RS-3021 | no | no | no | no | no | 0 | no |
| RS-3022 | no | no | no | no | no | 0 | no |
| RS-3023 | no | no | no | no | yes | 1 | no |
| RS-3024 | no | no | no | no | no | 0 | no |
| RS-3025 | no | no | no | yes | no | 1 | no |
| RS-3026 | no | yes | no | yes | yes | 3 | no |
| RS-3027 | no | no | no | no | no | 0 | no |
| RS-3028 | no | no | no | no | no | 0 | no |
| RS-3029 | yes | no | no | no | no | 1 | no |
| RS-3030 | no | no | no | no | no | 0 | no |
| RS-3031 | no | no | no | no | yes | 1 | no |
| RS-3032 | no | no | yes | no | no | 1 | no |
| RS-3033 | no | no | no | no | no | 0 | no |
| RS-3034 | no | no | no | no | no | 0 | no |
| RS-3035 | no | no | no | no | no | 0 | no |
| RS-3036 | no | no | no | no | no | 0 | no |
| RS-3037 | no | yes | no | no | no | 1 | yes |
| RS-3038 | yes | no | no | yes | no | 2 | no |
| RS-3039 | no | no | no | no | no | 0 | no |
| RS-3040 | no | yes | no | no | no | 1 | no |
| RS-3041 | no | yes | no | no | no | 1 | no |
| RS-3042 | no | no | no | no | no | 0 | no |
| RS-3043 | no | no | no | yes | no | 1 | no |
| RS-3044 | no | no | no | no | no | 0 | no |
| RS-3045 | yes | yes | yes | no | yes | 4 | no |
| RS-3046 | no | yes | no | no | no | 1 | no |
| RS-3047 | no | no | no | no | no | 0 | no |
| RS-3048 | yes | yes | no | no | no | 2 | no |
| RS-3049 | yes | no | no | no | no | 1 | no |
| RS-3050 | no | no | no | no | yes | 1 | no |
| RS-3051 | no | no | yes | no | no | 1 | no |
| RS-3052 | no | yes | yes | no | no | 2 | no |
| RS-3053 | no | no | no | no | no | 0 | no |
| RS-3054 | no | no | yes | no | no | 1 | no |
| RS-3055 | no | no | no | no | no | 0 | no |
| RS-3056 | no | no | no | no | no | 0 | no |
| RS-3057 | no | no | no | no | no | 0 | yes |
| RS-3058 | no | no | no | no | no | 0 | no |
| RS-3059 | no | no | no | yes | no | 1 | no |
| RS-3060 | no | no | yes | no | no | 1 | no |
| RS-3061 | no | no | no | no | no | 0 | no |
| RS-3062 | no | no | yes | no | no | 1 | no |
| RS-3063 | no | no | no | no | no | 0 | no |
| RS-3064 | no | no | no | no | no | 0 | no |
| RS-3065 | no | no | no | no | no | 0 | no |
| RS-3066 | no | no | no | yes | no | 1 | no |
| RS-3067 | no | no | no | no | no | 0 | no |
| RS-3068 | no | no | no | no | no | 0 | no |
| RS-3069 | yes | no | no | no | no | 1 | no |
| RS-3070 | no | no | no | no | no | 0 | no |
| RS-3071 | yes | yes | yes | yes | no | 4 | no |
| RS-3072 | no | yes | no | no | no | 1 | no |
| RS-3073 | no | no | no | no | no | 0 | no |
| RS-3074 | no | no | no | no | no | 0 | no |
| RS-3075 | no | no | no | no | no | 0 | no |
| RS-3076 | yes | no | no | no | no | 1 | no |
| RS-3077 | no | no | no | no | no | 0 | no |
| RS-3078 | no | no | no | no | no | 0 | no |
| RS-3079 | no | no | yes | no | no | 1 | no |
| RS-3080 | yes | yes | yes | yes | yes | 5 | no |
| RS-3081 | no | no | no | no | no | 0 | no |
| RS-3082 | no | no | no | no | no | 0 | no |
| RS-3083 | no | no | no | yes | no | 1 | no |
| RS-3084 | no | no | no | no | yes | 1 | no |
| RS-3085 | no | no | no | no | no | 0 | no |
| RS-3086 | yes | no | yes | yes | no | 3 | no |
| RS-3087 | no | yes | no | no | no | 1 | no |
| RS-3088 | no | yes | no | no | no | 1 | no |
| RS-3089 | no | no | no | no | no | 0 | no |
| RS-3090 | no | no | no | no | no | 0 | no |
| RS-3091 | no | no | no | no | yes | 1 | no |
| RS-3092 | no | no | no | no | no | 0 | no |
| RS-3093 | no | no | no | no | no | 0 | no |
| RS-3094 | no | no | no | no | yes | 1 | no |
| RS-3095 | no | no | no | no | no | 0 | no |
| RS-3096 | yes | no | no | no | no | 1 | no |
| RS-3097 | no | no | yes | no | no | 1 | no |
| RS-3098 | no | no | no | no | no | 0 | no |
| RS-3099 | yes | no | no | no | no | 1 | no |
| RS-3100 | no | no | yes | no | no | 1 | yes |

Totals: 1 thread has 5 signals, 2 have 4, 2 have 3, 3 have 2, 42 have 1, and 50 have 0.
Of the 89 other threads, 40 have 1 signal: Silent 8, No owner 8, Date at risk 8, Spread 8, Escalation 8.
The 2 other threads with 1 signal are data gaps.

## 2. Expected card

### Top risks

1. **RS-3080 · SSO login loop on reset** (5 signals). Silent (last reply 2 Oct); No owner (owner: none); Date at risk (committed: 23 Oct); Spread (accounts: 2); Escalation (quote: "Fix this week or we will cancel.").
2. **RS-3045 · Double annual charge** (4 signals). Silent (last reply 8 Oct); No owner (owner: none); Date at risk (committed: 21 Oct); Escalation (quote: "We will escalate this to your CEO.").
3. **RS-3071 · Webhook retries stop** (4 signals). Silent (last reply 25 Sep); No owner (owner: none); Date at risk (committed: 20 Oct); Spread (accounts: Fernwick Labs, Orvanta Foods).

Tie-breaks:

- Rank 1: RS-3080 is the only thread with 5 signals. No tie-break is necessary.
- Rank 2 and rank 3: RS-3045 and RS-3071 have 4 signals each. RS-3045 has Escalation and RS-3071 does not, so RS-3045 is rank 2.
- Both threads have Date at risk, so tie-break 2 does not decide. RS-3071 has the older last reply (25 Sep, not 8 Oct). If Juno uses only the last reply, it puts RS-3071 at rank 2. That result is wrong.

### Also watch

Expected line, in rank sequence: RS-3026, RS-3086, RS-3052, RS-3038, RS-3048

4. **RS-3026 · CSV export cuts off rows** (3 signals). No owner (owner: none); Spread (accounts: 3); Escalation (quote: "We will not renew if exports stay broken.").
5. **RS-3086 · Report totals differ** (3 signals). Silent (last reply 29 Sep); Date at risk (committed: 7 Oct); Spread (accounts: 4).
6. **RS-3052 · Slow permission updates** (2 signals). No owner (owner: none); Date at risk (committed: 22 Oct).
7. **RS-3038 · App crashes on start** (2 signals). Silent (last reply 17 Sep); Spread (accounts: Brackenlow Hotels, Velloran Travel).
8. **RS-3048 · API token expires early** (2 signals). Silent (last reply 1 Oct); No owner (owner: none).

Tie-breaks:

- RS-3026 comes before RS-3086. Both have 3 signals. RS-3026 has Escalation. RS-3086 has Date at risk and an older last reply, but tie-break 1 decides first.
- RS-3086 comes before RS-3052, because it has 3 signals and RS-3052 has 2. No tie-break is necessary.
- RS-3052, RS-3038, and RS-3048 have 2 signals each. None has Escalation. Only RS-3052 has Date at risk, so it comes first.
- RS-3052 has the newest last reply of the three (15 Oct). If Juno uses only the last reply, it puts RS-3052 last. That result is wrong.
- RS-3038 comes before RS-3048. Both have no Escalation and no Date at risk. RS-3038 has the older last reply (17 Sep, not 1 Oct).
- Exactly 1 of the 5 has a committed date before today: RS-3086 (7 Oct). Exactly 1 has Escalation: RS-3026.

In the skill file, the rule to rank threads applies to all threads. Thus this key expects the rank sequence. The Format section does not repeat the sequence for the Also watch line.
If Juno writes the 5 IDs in ID sequence, the set is correct but the sequence is not.

### Data gaps

Expected line: RS-3037, RS-3057, RS-3100

- **RS-3037 · Webhook lacks user ID**: "last reply: missing". Other signals: No owner.
- **RS-3057 · Duplicate calendar events**: "last reply: missing". Other signals: none.
- **RS-3100 · Blank invoice PDF**: "last reply: missing". Other signals: Date at risk.

If Juno guesses a Silent signal for these threads, RS-3037 and RS-3100 get 2 signals and go into Also watch. That result is wrong.

## 3. Traps

Each trap thread has exactly 1 real signal.
If Juno reads an unhappy quote, a Friday reply, or a late date as a signal, the thread gets 2 signals. Then it goes into Also watch, and that result is wrong.
If Juno does not count the date before today on these 3 threads, the card does not change. Each of them has only 1 signal, so use the table to test them. On the card, RS-3086 tests this rule.
If Juno does not count its date (7 Oct), RS-3086 has 2 signals. Then Also watch becomes RS-3026, RS-3052, RS-3038, RS-3086, RS-3048, and that result is wrong.

| ID | Trap | Rule that it tests | Correct result |
| :- | :- | :- | :- |
| RS-3009 | Unhappy quote: "Annoying, but we can work with it." | Escalation | Not Escalation. The quote does not say escalate, cancel, or not renew. |
| RS-3046 | Unhappy quote: "My team is not happy with this." | Escalation | Not Escalation. The quote does not say escalate, cancel, or not renew. |
| RS-3054 | Unhappy quote: "We are frustrated. Please send an update." | Escalation | Not Escalation. The quote does not say escalate, cancel, or not renew. |
| RS-3066 | Unhappy quote: "This bug costs us an hour each day." | Escalation | Not Escalation. The quote does not say escalate, cancel, or not renew. |
| RS-3096 | Unhappy quote: "Not great. We expected a fix by now." | Escalation | Not Escalation. The quote does not say escalate, cancel, or not renew. |
| RS-3017 | Last reply Friday 16 Oct | Silent, do not count Saturday and Sunday | Not Silent. The count is 1 weekday. |
| RS-3019 | Last reply Friday 16 Oct | Silent, do not count Saturday and Sunday | Not Silent. The count is 1 weekday. |
| RS-3084 | Last reply Friday 16 Oct | Silent, do not count Saturday and Sunday | Not Silent. The count is 1 weekday. |
| RS-3087 | Last reply Friday 16 Oct | Silent, do not count Saturday and Sunday | Not Silent. The count is 1 weekday. |
| RS-3088 | Last reply Friday 16 Oct | Silent, do not count Saturday and Sunday | Not Silent. The count is 1 weekday. |
| RS-3001 | Committed 2 Nov | Date at risk, next 7 days | Not Date at risk. The date is 14 days after today. |
| RS-3010 | Committed 30 Oct | Date at risk, next 7 days | Not Date at risk. The date is 11 days after today. |
| RS-3014 | Committed 29 Oct | Date at risk, next 7 days | Not Date at risk. The date is 10 days after today. |
| RS-3076 | Committed 12 Nov | Date at risk, next 7 days | Not Date at risk. The date is 24 days after today. |
| RS-3099 | Committed 5 Nov | Date at risk, next 7 days | Not Date at risk. The date is 17 days after today. |
| RS-3032 | Committed 13 Oct | Date at risk, before today | Date at risk. This is the only signal of the thread. |
| RS-3051 | Committed 2 Oct | Date at risk, before today | Date at risk. This is the only signal of the thread. |
| RS-3097 | Committed 9 Oct | Date at risk, before today | Date at risk. This is the only signal of the thread. |

Other tests in the data:

- RS-3069: last reply 13 Oct. This is the nearest Silent date (4 weekdays).
- 35 threads have a last reply on Thursday 15 Oct. They are not Silent (2 weekdays). If Juno counts Saturday and Sunday, these threads also become Silent.
- 6 quotes are calm, not unhappy: RS-3021, RS-3022, RS-3028, RS-3033, RS-3034, RS-3052. They are not traps and they are not Escalation.
- Spread uses both forms: "accounts: 2" or more, and a list of 2 company names.
- Tie-break tests: ranks 2 and 3, ranks 4 and 5, and ranks 6, 7, and 8.

## 4. Check script

The script reads only the text file. It calculates the signals, the rank, and the card. It also checks the design numbers, the traps, and the format rules.
Run it with this command:

```sh
python3 check_threads.py demo-threads-100.txt
```

Result of the script on the data file (the 100 table lines are not shown):

```text
TOP [('RS-3080', ['silent', 'no_owner', 'date_at_risk', 'spread', 'escalation']), ('RS-3045', ['silent', 'no_owner', 'date_at_risk', 'escalation']), ('RS-3071', ['silent', 'no_owner', 'date_at_risk', 'spread'])]
ALSO ['RS-3026', 'RS-3086', 'RS-3052', 'RS-3038', 'RS-3048']
GAPS ['RS-3037', 'RS-3057', 'RS-3100']
TRAP fri16 ['RS-3017', 'RS-3019', 'RS-3084', 'RS-3087', 'RS-3088']
TRAP after27 ['RS-3001', 'RS-3010', 'RS-3014', 'RS-3076', 'RS-3099']
TRAP past ['RS-3032', 'RS-3051', 'RS-3097']
QUOTES not escalation:
  RS-3009 Annoying, but we can work with it.
  RS-3021 Thanks for the quick reply.
  RS-3022 Can you share the next step?
  RS-3028 Thanks, the workaround helps.
  RS-3033 We found a workaround.
  RS-3034 Please confirm the root cause.
  RS-3046 My team is not happy with this.
  RS-3052 Please send us a new date.
  RS-3054 We are frustrated. Please send an update.
  RS-3066 This bug costs us an hour each day.
  RS-3096 Not great. We expected a fix by now.
ERRORS 0
```

Comparison: the table in section 1 comes from the design. The script result comes from the text file. All 100 rows are the same.
The script cannot judge if a quote sounds unhappy. A person must read the 5 unhappy quotes in section 3.

```python
"""Check the Juno Risk radar demo data. Read only the text file. Calculate the signals and the card.

Usage: python3 check_threads.py demo-threads-100.txt
"""
import re
import sys
from datetime import date, timedelta

TODAY = date(2026, 10, 19)
MONTHS = {"Sep": 9, "Oct": 10, "Nov": 11}
LINE = re.compile(
    r'^(RS-\d{4}) \| ([^|]+) \| link: (https://support\.rocketship\.example/RS-\d{4}) \| '
    r'opened (\d{1,2} [A-Z][a-z]{2}) \| (?:last reply (\d{1,2} [A-Z][a-z]{2})|last reply: (missing)) \| '
    r'owner: ([A-Z][a-z]+|none) \| accounts: ([^|]+) \| quote: (none|"[^"]+") \| '
    r'committed: (none|\d{1,2} [A-Z][a-z]{2})$')
ESCALATION = re.compile(r"\b(escalate|cancel|not renew)\b", re.I)
BANNED = re.compile(r"escalat|cancel|renew", re.I)
SIGNALS = ["silent", "no_owner", "date_at_risk", "spread", "escalation"]
errors = []


def need(ok, message):
    if not ok:
        errors.append(message)


def to_date(text):
    day, month = text.split()
    return date(2026, MONTHS[month], int(day))


def working_days_since(x):
    """Count the weekdays after x, up to and including today."""
    return sum(1 for i in range(1, (TODAY - x).days + 1) if (x + timedelta(days=i)).weekday() < 5)


lines = open(sys.argv[1], encoding="utf-8").read().splitlines()
need(len(lines) == 101, f"line count is {len(lines)}, not 101")
need(lines[0] == "Today: Monday 19 October 2026", "first line is wrong")
need(len("\n".join(lines)) <= 20000, "the block has more than 20,000 characters")
rows = []
for n, line in enumerate(lines[1:], start=1):
    m = LINE.match(line)
    if not m:
        errors.append(f"line {n + 1}: format is wrong")
        continue
    tid, title, link, opened, last, missing, owner, accounts, quote, committed = m.groups()
    opened, last = to_date(opened), (None if missing else to_date(last))
    committed = None if committed == "none" else to_date(committed)
    quote = None if quote == "none" else quote.strip('"')
    count = int(accounts) if accounts.isdigit() else len(accounts.split(", "))
    r = dict(id=tid, title=title, last=last, committed=committed, quote=quote, n_line=n)
    r["silent"] = last is not None and working_days_since(last) >= 3
    r["no_owner"] = owner == "none"
    r["date_at_risk"] = committed is not None and (
        committed < TODAY or TODAY < committed <= TODAY + timedelta(days=7))
    r["spread"] = count >= 2
    r["escalation"] = quote is not None and bool(ESCALATION.search(quote))
    r["gap"] = last is None
    r["n"] = sum(r[s] for s in SIGNALS)
    rows.append(r)
    # Format and content rules
    need(tid == f"RS-{3000 + n}", f"{tid}: ID is not in sequence")
    need(link.endswith("/" + tid), f"{tid}: link does not match the ID")
    need(len(line) <= 220, f"{tid}: line has {len(line)} characters")
    for x in (opened, last, committed):
        need(x is None or date(2026, 9, 1) <= x <= date(2026, 11, 30), f"{tid}: date out of range")
    need(opened <= TODAY and (last is None or opened <= last), f"{tid}: opened date is wrong")
    need(committed is None or committed > opened, f"{tid}: committed date is before the opened date")
    need(not BANNED.search(title), f"{tid}: title has a banned word")
    if quote:
        need(len(quote.split()) <= 12, f"{tid}: quote has more than 12 words")
        need(r["escalation"] or not BANNED.search(quote), f"{tid}: quote has a banned word")
    # Edge-case dates are not used
    if last:
        need(last <= date(2026, 10, 13) or last in (date(2026, 10, d) for d in (15, 16, 19)),
             f"{tid}: last reply is an edge date")
    if committed:
        need(date(2026, 10, 20) <= committed <= date(2026, 10, 25)
             or date(2026, 10, 1) <= committed <= date(2026, 10, 16)
             or committed >= date(2026, 10, 29), f"{tid}: committed is an edge date")

titles = [r["title"] for r in rows]
need(len(set(titles)) == len(titles), "a title is used two times")

# The card
ranked = sorted((r for r in rows if r["n"] > 0),
                key=lambda r: (-r["n"], not r["escalation"], not r["date_at_risk"], r["last"] or date.max))
top = ranked[:3]
also = [r for r in ranked[3:] if r["n"] >= 2]
gaps = [r for r in rows if r["gap"]]

# The design numbers
others = [r for r in rows if r not in top and r not in also and not r["gap"]]
need([r["n"] for r in top] == [5, 4, 4], "Top risks do not have 5, 4, 4 signals")
need(top[1]["escalation"] and not top[2]["escalation"] and top[2]["spread"] and not top[1]["spread"],
     "rank 2 and rank 3 do not show the Escalation tie-break")
need(sorted(r["n"] for r in also) == [2, 2, 2, 3, 3], "Also watch is not 3, 3, 2, 2, 2")
need(sum(r["committed"] is not None and r["committed"] < TODAY for r in also) == 1,
     "Also watch must have 1 committed date before today")
need(sum(r["escalation"] for r in also) == 1, "Also watch must have 1 Escalation")
need(len(gaps) == 3 and all(r["n"] <= 1 for r in gaps), "Data gaps are wrong")
need(len(others) == 89 and all(r["n"] <= 1 for r in others), "a thread outside the design has 2+ signals")
singles = [r for r in others if r["n"] == 1]
need(len(singles) == 40, f"{len(singles)} threads have 1 signal, not 40")
for s in SIGNALS:
    need(sum(r[s] for r in singles) >= 5, f"fewer than 5 single-signal threads have {s}")
need(all(r["n_line"] > 10 for r in top + also), "a top or Also watch thread is in the first 10 lines")
# The traps
fri = [r for r in others if r["last"] == date(2026, 10, 16)]
late = [r for r in others if r["committed"] and r["committed"] > date(2026, 10, 27)]
past = [r for r in others if r["committed"] and r["committed"] < TODAY]
need(len(fri) == 5 and not any(r["silent"] for r in fri), "Friday trap count is wrong")
need(len(late) == 5 and not any(r["date_at_risk"] for r in late), "after 27 Oct trap count is wrong")
need(len(past) == 3 and all(r["n"] == 1 for r in past), "before-today trap count is wrong")

yn = lambda b: "yes" if b else "no"
print("ID silent no_owner date_at_risk spread escalation signals gap")
for r in rows:
    print(r["id"], *[yn(r[s]) for s in SIGNALS], r["n"], yn(r["gap"]))
print("TOP", [(r["id"], [s for s in SIGNALS if r[s]]) for r in top])
print("ALSO", [r["id"] for r in also])
print("GAPS", [r["id"] for r in gaps])
print("TRAP fri16", [r["id"] for r in fri])
print("TRAP after27", [r["id"] for r in late])
print("TRAP past", [r["id"] for r in past])
print("QUOTES not escalation:")
for r in rows:
    if r["quote"] and not r["escalation"]:
        print(" ", r["id"], r["quote"])
print("ERRORS", len(errors))
for e in errors:
    print(" ", e)
sys.exit(1 if errors else 0)
```
