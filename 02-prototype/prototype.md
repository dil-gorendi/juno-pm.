# Prototype · Juno

> Module 2 · Prototype. The working build that tests your idea, made with your build tool of choice.

## Prototype link

[Juno · Risk radar](https://dil-gorendi.github.io/juno-pm./02-prototype/app/). A stranger can open this link. This public copy cannot call the AI model, so it shows the stored results for the two examples.

To use the live AI model, run the app on your computer:

1. In the `02-prototype/app` folder, run `npm install`.
2. Run `npm start`.
3. Open [http://localhost:8787](http://localhost:8787).

The local server sends the text box content to Claude on Amazon Bedrock. It uses the AWS credentials of the computer. The system prompt is [`risk-radar-skill.md`](risk-radar-skill.md), without changes.

## What it demonstrates

Juno reads the open threads and writes one Monday risk card in the Slack channel #pm-monday. The card shows the 3 threads with the highest risk, and each signal shows as a red tag. If the inputs do not give the date of today, Juno does not rank. Then Juno writes the fields that it must have.

## Debrief

- **What worked:** In 8 live runs of "Load example", the Top risks were RS-2001, RS-2004, and RS-2012. Data gaps showed RS-2012 in each run. Without the date of today, Juno did not rank in 2 of 2 runs.
- **What broke / felt like a toy:** The skill file asks for "the signals and their source values" in each Why line. In 4 of 8 runs, the Why lines gave only field values, such as "Owner: none". Then the app has no signal name to show as a red tag. The stored result is a live run that names all the signals. Juno also reports that each thread has no link, because the example threads have no link field.
- **What I'd change next pass:** Change the Why rule so that each signal name comes first, then its source value. For example: "No owner (owner: none)". Add a link to each example thread, or remove the link from the fields that Juno must have.
