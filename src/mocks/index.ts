import { RequestHandler } from "msw";
import { todoHandler } from "./handlers/todos";

export const handlers: RequestHandler[] = [...todoHandler];
