import { NextRequest, NextResponse } from "next/server";
import data from "./data/questions.json";

export const middleware = async (req: NextRequest) => {
  const { pathname } = req.nextUrl;
  const url = req.nextUrl.clone();

  if (
    pathname === "/" ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/asset") ||
    pathname.startsWith("/finish") ||
    pathname.startsWith("/questions") ||
    pathname === "/robots.txt"
  ) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/start")) {
    url.pathname = "/" + data.questions[0].key;
    return NextResponse.redirect(url);
  }

  if (!pathname.startsWith("/api")) {
    url.pathname = "/api" + url.pathname;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
};
