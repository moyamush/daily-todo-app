import { RequestHandler } from "msw";
import { todoHandler } from "./handlers/todos";
import { tagHandler } from "./handlers/tags";
import { statusHandler } from "./handlers/statuses";

export const handlers: RequestHandler[] = [
  ...todoHandler,
  ...tagHandler,
  ...statusHandler,
];
