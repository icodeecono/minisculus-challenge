// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../data/questions.json";

type Data = {
  slug: string | string[] | undefined;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { question_slug } = req.query;
  let questionFound = false;
  let returnObj: any = {};

  for (let i = 0; i < data.questions.length; i++) {
    let questionObj = data.questions[i];
    if (questionObj.key === question_slug) {
      questionFound = true;
      if (req.method === "GET") {
        returnObj.question = questionObj.question;
        returnObj["reference-url"] = "/" + questionObj["reference-url"];
        res.status(200).json(returnObj);
      } else if (req.method === "PUT") {
        const reqBody = req.body;
        if (reqBody === "") {
          returnObj = {
            error:
              "No data sent, please post your answer in JSON format.  For details, please visit https://www.minisculuschallenge.com/",
          };
          res.status(422).json(returnObj);
        } else {
          let userAnswer: any = {};
          try {
            userAnswer = JSON.parse(reqBody);
          } catch (e) {
            returnObj = {
              error:
                "Invalid JSON format, please post your answer in JSON format.  For details, please visit https://www.minisculuschallenge.com/",
            };
            res.status(422).json(returnObj);
          }

          if (userAnswer.answer === undefined) {
            returnObj = {
              error:
                "No 'answer' input found, please post your answer in JSON format.  For details, please visit https://www.minisculuschallenge.com/",
            };
            res.status(422).json(returnObj);
          }

          if (userAnswer.answer === questionObj.answer) {
            // correct answer, redirect to next question
            const nextQuestionIndex = i + 1;
            if (nextQuestionIndex < data.questions.length) {
              const nextQuestionObj = data.questions[nextQuestionIndex];
              res.redirect(302, "/" + nextQuestionObj.key);
            } else {
              // send to final question
              const endingQuestionObj = data.ending;
              returnObj.code = endingQuestionObj.code;
              returnObj.email = endingQuestionObj.email;
              returnObj["reference-url"] =
                "/" + endingQuestionObj["reference-url"];
              res.status(200).json(returnObj);
            }
          } else {
            returnObj = {
              error:
                "Sorry! Incorrect Answer! Please try again.  For details, please visit https://www.minisculuschallenge.com/",
            };
            res.status(422).json(returnObj);
          }
        }
      } else {
        res.setHeader("Allow", ["GET", "PUT"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
      }
    }
  }

  if (!questionFound) {
    returnObj = { error: "File Not Found" };
    res.status(404).json(returnObj);
  }
}
