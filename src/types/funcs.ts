export interface IGenerateToken {
  id: number;
  secretKey: string;
}

export interface IMutateByIdProps {
  id: number;
  ownerId: number;
}
