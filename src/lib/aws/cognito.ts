import {
  CognitoUserPool,
  ICognitoUserPoolData,
} from "amazon-cognito-identity-js";

const poolUser: ICognitoUserPoolData = {
  UserPoolId: `${process.env.NEXT_PUBLIC_USER_POOL_ID}`,
  ClientId: `${process.env.NEXT_PUBLIC_CLIENT_ID}`,
};

export const userPool = new CognitoUserPool(poolUser);
