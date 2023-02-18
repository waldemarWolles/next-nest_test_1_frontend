export interface ILoginDto {
  email: string
  password: string
}

export interface IResponseUserDto {
  createAt: string
  email: string
  id: number
  token: string
  updatedAt: string
}
