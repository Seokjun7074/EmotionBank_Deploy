export interface PostNicknameCheckResponse {
  possible: boolean;
}

export interface PostSignupResponse {
  grantType: string;
  accessToken: string;
  accessTokenExpireTime: string;
  nickname: string;
}

export interface GetLoginResponse {
  grantType: string;
  accessToken: string;
  accessTokenExpireTime: string;
  userId?: number;
  role?: string;
  nickname?: string;
}

export interface GetMyInfoResponse {
  userId: number;
  nickname: string;
  birthday: string;
  accountNumber: string;
  accountName: string;
}

export interface GetUserAccountInfoResponse {
  nickname: string;
  accountId: string;
  accountNumber: string;
  balance: number;
  following: number;
  follower: number;
}

export interface GetOtherAccountInfoResponse {
  nickname: string;
  accountId: string;
  userId: string;
  isFollow: boolean;
  following: number;
  follower: number;
}

export interface GetRenewAccessTokenResponse {
  tokenType: string;
  accessToken: string;
}

export interface FollowType {
  nickname: string;
  image: string;
  userId: number;
}

export interface GetFollowList {
  follows: FollowType[];
}
