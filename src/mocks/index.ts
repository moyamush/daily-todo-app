import { RequestHandler } from "msw";
import { todoHandler } from "./handlers/todos";
import { tagHandler } from "./handlers/tags";

export const handlers: RequestHandler[] = [...todoHandler, ...tagHandler];
